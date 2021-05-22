let session = require('express-session');
const express = require('express');
const axios = require('axios').default;
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
var $ = require('jquery');
var engine = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb+srv://igranet:CSE330s@cluster0.gcbju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', engine.mustache);
app.set('view engine', 'html');

const cors = require('cors');
const { response, request } = require('express');


app.use(cors({ origin: true, credentials: true }));
axios.defaults.withCredentials = true;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', '*');
  res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
  res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, content-type");
  res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
  next();
})


let user = class {
  constructor(username, password, userId) {
    this.username = username;
    this.password = password;
    this.userId = userId;
    this.userGroups = []
  }

};




app.get('/userData', function (request, response) {
  if (request.session.loggedin) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("spiroTest");

      var o_id = new ObjectId(request.session.userId);
      let query = { "_id": o_id };
      let arrayOfUserGroups;

      dbo.collection("userData").find(query).toArray(function (err, result) {
        response.send(result);
        response.end();
        db.close();
      })
    })
  } else {
    let data = {
      "error": "420",
    }
    response.status(400).send(data);
    response.end()
  }
})

app.get('/userGroups', function (request, response) {
  if (request.session.loggedin) {
    for (let i in request.session.userGroups) {

      request.session.userGroups[i] = new ObjectId(request.session.userGroups[i])
    }
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("spiroTest");
      dbo.collection("groupData").find({ "_id": { $in: request.session.userGroups } }).toArray(function (err, result) {
        response.send(result)
        response.end()
      })
    });


  } else {
    let data = {
      "error": "420",
    }
    response.status(400).send(data);
    response.end()
  }
})



app.post('/submitlogin', function (request, res) {
  let usernameToCheck = request.body.username;


  let passwordToCheck = request.body.password;



  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("spiroTest");
    let query = { "name": usernameToCheck, "password": passwordToCheck };
    dbo.collection("userData").find(query).toArray(function (err, result) {
      if (err) throw err;
      if (result[0] != undefined) {
        if (result[0].password == passwordToCheck) {


          request.session.loggedin = true;
          request.session.username = usernameToCheck;
          request.session.userData = result
          request.session.userId = result[0]._id;
          request.session.userGroups = result[0].groups
          console.log(request.session.userGroups)




          res.send({ "object": result });
          res.end()
        } else {
          res.status(400).send({
            "error": "Error, invalid password"
          })
          res.end()
        }
      } else {
        res.status(400).send({
          "error": "Invalid Login Credential"
        })
        res.end()

      }
      db.close();

    });
  });


})
app.use("/", express.static(__dirname));

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
})

app.get('/logout', function (req, res) {
  req.session.destroy()
  res.sendFile(path.join(__dirname + '/logout'));

})


function insertGroup(req) {
  MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var datetime = new Date();
    var dbo = db.db("spiroTest");
    let query = { "groupName": req.body.groupName, "groupMembers": [req.session.userId], "groupOwner": req.session.userId, "links": [], "isPrivate": false, "dateCreated": datetime };

    //for Second query. For some reason, beyond my understanding, nothing works in between the dbo collections

    //end second query 

    dbo.collection("groupData").insertOne(query, function (err, result) {
      console.log("181")
      if (err) {
        res.send(err)
        res.end()
        throw err
      } else {
        req.session.tempOID = result.insertedId
        return result.insertedId
        console.log("The request Id is now : " + req.session.tempOID)
      }
      db.close()
    })
  })
  
}

function addToUserArray(req, groupId) {
  MongoClient.connect(url, function (err, db) {
    var o_id = new ObjectId(req.session.userId);
    let toFind = { "_id": o_id }
    let newquery = { $push: { "groups": groupId } }
    var dbo = db.db("spiroTest");
    dbo.collection("userData").updateOne(toFind, newquery, function (err, result) {
      db.close()
    })
  })

}


app.post('/addGroup', function (req, res) {
  MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var datetime = new Date();
    var dbo = db.db("spiroTest");
    let query = { "groupName": req.body.groupName, "groupMembers": [req.session.userId], "groupOwner": req.session.userId, "links": [], "isPrivate": false, "dateCreated": datetime };
    
    
    
    //for Second query. For some reason, beyond my understanding, nothing works in between the dbo collections

    //end second query 

    dbo.collection("groupData").insertOne(query, function (err, result) {
      console.log("181")
      if (err) {
        res.send(err)
        res.end()
        throw err
      } else {
        
        req.session.tempOID = result.insertedId
        req.session.userGroups.push(result.insertedId)
        res.send({"groupId":req.session.tempOID})
        res.end()
        console.log("The request Id is now : " + req.session.tempOID)
      }
      db.close()
    })
  })
 

})

app.post('/updateUserGroups', function(req, res){
  addToUserArray(req, req.body.groupId)
  res.send({"yay":"yay"})
  res.end()
})


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

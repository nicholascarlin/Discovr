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
'use strict'

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
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
console.log(__dirname)

app.use("/", express.static(__dirname+"/public/Pages/"));

function insertToWaitlist(email, request){
  MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var datetime = new Date();
    var dbo = db.db("DISCOVRWAITLIST");
    var datetime = new Date();
    let query = {"email": email, "dateAdded": datetime, "friendsAdded":[], "waitlistPosition":0}
    dbo.collection("Users").insertOne(query, function (err, result) {
      console.log(result.ops[0].dateAdded)
      request.session.userId = result.ops[0].dateAdded
      request.session.email = result.ops[0].email
      db.close()
    })
 
  })

}
function insertToMain(userId, request){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("DISCOVRWAITLIST");
    dbo.collection("MaintainWaitlist").updateOne(
      {"id": "WAITLIST"}, 
      {$push: {"waitlist":request.body.email}}, function(err, result){
        db.close()
      } 
    )
    db.close()
 
  })

}
function checkIfIsExisting(email, request){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("DISCOVRWAITLIST");
    dbo.collection("MaintainWaitlist").findOne({"id":"WAITLIST"}, function(err,result){
      console.log(result)
      console.log("Index of email is: "+result.waitlist.indexOf(email))
      if(result.waitlist.indexOf(request.body.email) === -1){
        request.session.emailExists = true;
        console.log("has email: "+request.session.emailExists)
        console.log()
        request.session.waitlistSize = result.waitlist.length
        insertToWaitlist(email,request)
        insertToMain("hello", request)
      } else {
        request.session.waitlistSize = result.waitlist.indexOf(email)
        request.session.emailExists = false;
        console.log("has email: "+request.session.emailExists)
      }
      
    })
    db.close()
   
   
   
  })
}



app.post("/addToWaitlist", function(request, response){
  console.log("here")
  console.log(request.body.email)
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(request.body.email)){
    response.status(404)
    response.end()
  } else {
  
    checkIfIsExisting(request.body.email,request)
    setTimeout(function(){ 
    
    if(!request.session.emailExists){
      let data = {
        "position":request.session.waitlistSize, "isCurrUser":true
      }
      response.send(data)
      response.end(); 
    } else {
      let data = {
        "position":request.session.waitlistSize, "isCurrUser":false
      }
      response.send(data)
    }
    

}, 3000);
  }
    
 
})
  

var server = app.listen(process.env.PORT || 80, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});



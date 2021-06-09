let session = require('express-session');
const express = require('express');
const axios = require('axios').default;
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
var $ = require('jquery');
var engine = require('consolidate');
const https = require('https');
const fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb+srv://igranet:CSE330s@cluster0.gcbju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
'use strict'

app.use(session({
  secret: 'asdfaksldfjewqf348ru934hf934fn8394hnkdsnafkjnfaskdjnf',
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
const { debounce } = require('underscore');
const { RequestTimeout } = require('http-errors');
const { is } = require('bluebird');


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

app.use("/", express.static(__dirname +"/public/Pages"));

app.get("/about", function(request, response){
  response.sendFile(path.join(__dirname+ '/public/Pages/about.html'));
})
app.use(function(req, res, next) {
  if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
      res.redirect('https://' + req.get('Host') + req.url);
  }
  else
      next();
});



// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app)
// .listen(3000, function () {
//   console.log('Example app listening on port 3000! Go to https://localhost:3000/')
// })

const key = fs.readFileSync('./private.key');
const cert = fs.readFileSync('./certificate.crt');


const server = https.createServer({key: key, cert: cert }, app);
// const httpServer = http.createServer(app)

server.listen(443, () => { console.log('listening on 3001') });
// var server = app.listen(process.env.PORT || 80, function () {
//   var port = server.address().port;
//   console.log("App now running on port", port);
// });



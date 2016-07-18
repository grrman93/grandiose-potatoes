var db = require('./db/db')
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');


var app = express();
app.use(express.static(__dirname + '/../client'))
app.port = 3000;

app.listen(app.port, function(){
	console.log('we are listening!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware for routes
//https://expressjs.com/en/guide/routing.html
app.use('/routes', router);

// app.post('/api/questions', function(req, res) {
//   console.log('req.body', req.body)
//   //console.log('req.query', req.query);
//
//   var question = req.body.txt;
//
//   db.Question.create({txt: question})
//   .then(function(question){
//     console.log(question.get('txt'));
//     res.end();
//   })
// });

// app.get('/api/questions', function(req, res) {
//   console.log('getting a request', req);
//   db.Question.findAll().then(function(questions) {
//     console.log('inside of server', questions);
//     res.send(questions);
//   });
// });
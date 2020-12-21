//express.js를 사용하여 back-end 구현
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet({
  contestSecurityPolicy: false
}));
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/index');
var listRouter = require('./routes/patient_list');
var dataRouter = require('./routes/patient_data');
var commentRouter = require('./routes/patient_comment');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

//DB
app.use(session({
  secret: 'asdf',
  resave: false,
  saveUninitialized: true,
	store: new MySQLStore({
      host:"localhost",
      user:"root",
      password:"0312",
      database:"care_connect",
      port:3306
    })
}));

//필요한 주요 페이지 4개
app.use('/', indexRouter);
app.use('/list', listRouter);
app.use('/data', dataRouter);
app.use('/comment', commentRouter);

//bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/chart', express.static(__dirname + '/node_modules/chart.js/dist'));

//예외처리
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

/*app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});*/

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
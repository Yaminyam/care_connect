var http = require('http');
var fs = require('fs');
var url = require('url');

var indexRouter = require('./routes/index');
var listRouter = require('./routes/patient_list');
var dataRouter = require('./routes/patient_data');
var commentRouter = require('./routes/patient_comment');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use('/', indexRouter);
app.use('/list', listRouter);
app.use('/data', dataRouter);
app.use('/comment', commentRouter);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
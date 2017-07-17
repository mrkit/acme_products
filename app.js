const 
  express = require('express'),
  app = express(),
  morgan = require('morgan'),//shows the status
  nunjucks = require('nunjucks'),
  locals = {
    topSeller: 'suicide-vest'
  }; //to be used with nunjucks

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output){
  if(err) return console.log(err);
  console.log(output);
});

//app.set('views', __dirname + '/views'); //not necessary for nunjucks? So far it seems so
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.render('index', locals);
});

app.get('/news', function(req, res, next){
  res.json({name: 'newsRoute', data: 12345});
  next();
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
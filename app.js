const 
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  path= require('path'),
  morgan = require('morgan'),//shows the status
  nunjucks = require('nunjucks'),
  db = require('./db'),
  routes = require('./routes/products');
  

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', db, function(err, output){
  if(err) return console.log(err);
  console.log(output);
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded({extended:false}));
app.use(require('method-override')('_method'));

app.get('/', function(req, res){
  res.render('index', {topRated: db.topRated()});
});


app.use('/products', routes);

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
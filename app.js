const 
  express = require('express'),
  app = express(),
  morgan = require('morgan');


app.use(morgan('dev'));

app.get('/', function(req, res){
  res.send('you got the root route');
});

app.get('/news', function(req, res, next){
  res.json({name: 'newsRoute', data: 12345});
  next();
});



app.listen(3000, function(){
  console.log('listening on port 3000');
});
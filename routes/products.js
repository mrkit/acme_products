const
  router = require('express').Router(),
  db = require('../db');  


router.get('/', function(req, res, next){
  res.render('products', {products: db.list()});
});

router.get('/:id', function(req, res, next){
  res.render('product', {product: db.find({id: req.params.id*1})});
});

router.post('/', function(req, res, next){
  db.add(req.body);
  res.redirect('/products');
});

router.delete('/:id', function(req, res, next){
  db.del(req.params.id*1);
  res.redirect('/products');
});

module.exports = router; 
const 
  _ = require('lodash'),
  products = [
    {
      id: 1,
      name: 'Strait-Jacket Ejecting Bazooka',
      rating: 1000 
    },
    {
      id: 2,
      name: 'Triple Strength Fortified Leg Muscle Vitamins',
      rating: 5
    }
  ];
  

function add (product){
   if(!product.name){
      throw 'product must have a name';
    }
  
  if(!product.rating){
    throw 'product must have a rating';
  }
  
  product.rating = Number(product.rating);

  product.id = Math.round(1000*Math.random());//prof used a ,
  products.push(product);
}

function list () {
  return _.cloneDeep(products);
}

function find(id){
  return _.cloneDeep(_.filter(products, id));
}


function del(id){
  products = products.filter(function(product){
    if(product.id !== id){
      return product;
    }
  })
}

function topRated(){
  return products.sort(function(a,b){
    return a.rating < b.rating
  })[0];
}

module.exports = { add: add, list: list, find: find, topRated: topRated, del: del};

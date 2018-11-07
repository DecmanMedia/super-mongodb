var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productShema = new Schema({
  serial: Number,
  name: String,
  brand: String,
  price: [{
    supermarket: String,
    value: Number,
    history: [{
      value: Number,
      offer: {
        active: Boolean,
        type: String,
        quantity: Number
      },
      date: Date,
    }],
  }],
  score: {avg: Number, [{star:Number}]},
  picture: String
});

var supermarketShema = new Schema({
  name: String,
  address: String,
  logo: String,
});

var Product = mongoose.model('Product', productShema);
var Supermarket = mongoose.model('Supermarket', supermarketShema);

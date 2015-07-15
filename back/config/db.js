var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PPN');

var User = mongoose.model('User', { name: {type:String, default:"Fulano"} });

var user = new User({ name: 'Alisson' });
user.save(function (err) {
  if (err) // ...
  console.log('erro :()');
});

var mongoose = require('mongoose'),
  db = null,
  url = 'mongodb://localhost/PPN';

mongoose.connect(url);

db = mongoose.connection;

db.on('connected', function(err){
  if(err){
     console.log('error',err);
  }
  console.log('Conectado em :', url);
});

db.on('disconnected',function(err){
  if(err){
    console.log('error', err);
  }
});

process.on ('SIGINT', function () {
  db.close (function () {
    console.log ('Conexão encerrada após aplicação ser encerrada.');
    process.exit (0);
  });
});

module.exports = db;

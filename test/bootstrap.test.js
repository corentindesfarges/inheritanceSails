var Sails = require('sails');
var data = require('./datatest.js');

before(function(done) {
  Sails.lift({
    environment: 'test'
  }, function(){
    done();
  });
});

after(function(done) {
  Sails.lower(done);
});

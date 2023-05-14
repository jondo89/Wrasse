///////////////////////////////////////////////////////////////////
////      CHECK THE .ENV DEBUG MODE - USER PERMISSIONS        //// 
//////////////////////////////////////////////////////////////////
var dotenv = require('dotenv');
dotenv.config()
if (process.env) {
if (process.env.DEBUG =='true') {
  var debugging = true//turn on or off for debugging.
  //console.log('DEBUGGING IS ACTIVE - HEAVYLIFTING LOADING WITH NO USER PERMISSIONS.')
  var code = 200 // Code good
} else {
  var debugging = false//turn on or off for debugging.
  //console.log('PRODUCTION ENVIROMENT.')
  var code = 302 // Redirect to the login page.
}
}


//////////////////////////////////////////////////////////////////////////////////////////
////////// ENDPOINT TESTING FOR THE ADMIN FORMS WITH/WITHOUT USER PERMISSIONS ////////////
//////////////////////////////////////////////////////////////////////////////////////////
//More detail - test if the heavylifitng forms can be accessed with out basic user permissions.
const request = require('supertest');
const express = require('express');
var dotenv = require('dotenv');
dotenv.config()
var app = 'localhost:'+process.env.LOCALHOSTPORT
describe('Check if permission based admin enpoints are accessable with out login.', function() {
   it('Primary Form - check #1', function(done) {
    request(app)
    .get('/database/primary/58aa74140b9d3241280ecf17')
    .expect(code)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
   it('Primary Form - check #2', function(done) {
    request(app)
    .get('/database/primary/58aa74150b9d3241280ecf18')
    .expect(code)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
     it('Primary Form - check #4', function(done) {
    request(app)
    .get('/database/primary/58aa74130b9d3241280ecf16')
    .expect(code)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
     it('Navigation Form Test.', function(done) {
    request(app)
    .get('/database/navigation/58d2010b118e812d18654119')
    .expect(code)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });  
     it('Raw Form Test.', function(done) {
    request(app)
    .get('/database/raw/58d2010b118e812d18654119')
    .expect(code)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });  

});
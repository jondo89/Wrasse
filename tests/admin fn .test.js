///////////////////////////////////////////////////////
////////// MULTIPLE SERVER CRASH ATTEMPTS ////////////
/////////////////////////////////////////////////////
const request = require('supertest');
const express = require('express');
var dotenv = require('dotenv');
dotenv.config()
var app = 'localhost:'+process.env.LOCALHOSTPORT
describe('POST /users; try break the login', function() {
  it('This is a fake login with good credentials , and should fail', function(done) {
    request(app)
    .post('/signin')
    .send({     "email" : "testing@testuser.com",
      "password" : "somethingstrong",
      'g-recaptcha-response':
      '03AGdBq24mO2jJYkqQZgaiOPkb3LLwUdLwx-J56Fg8wpxJzIVNF-samq67eCLTyZ7u9JCW_RzW_MTLncNZl7GgSJZKjODZR3zCUtJQKyowFx1D8ImcAG8Kgi1ckBw51LFdv0MTfHGBMa44l8zrAHrX8zjBH7s0Q4jDjRP04Udlhz6XTYIlAYNfLa7aI4eYEeAcz63IV_jp0pu1ORRW0yJzRk5pyDj6P5k9ure_9xoz6DCJmNmA3gnUHhiMuT4YUq83mByyBEo483l4a8FV8hDz_V63z0_JE5PfHNOt8oHqpD4Tf6xA1GfgzJhxCIOuURBfki7BOW9d9xQuQoHj2YKEHunVTdWyqfFg8E4fiH8Ow24kYhi-Iw-NWscSuu3QqpGNPjJQNe1JGxcNYlB6_doNEEY8Nq0ev6Fo2g'})
    .expect(302)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
  it('Form test for eval server break.', function(done) {
    request(app)
    .post('/signin')
    .send({"poops" : "eval('console.log')"})
    .expect(302)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
  it('Forgot post - Test fake data.', function(done) {
    request(app)
    .post('/forgot')
    .send({"poops" : "eval('console.log')"})
    .expect(302)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
  it('Test email should fail.', function(done) {
    request(app)
    .post('/forgot')
    .send({"email" : "jdavies@isithelo.com"})
    .expect(302)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
  it('Old reset should fail.', function(done) {
    request(app)
    .get('/reset/35d564919cc1d8a14c20ea1f9e0801f0')
    .expect(302)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
  it('Old reset should fail.', function(done) {
    request(app)
    .get('/reset/')
    .expect(404)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});
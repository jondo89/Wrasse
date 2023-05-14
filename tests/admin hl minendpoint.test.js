const request = require('supertest');
const express = require('express');
var dotenv = require('dotenv');
dotenv.config()
var app = 'localhost:'+process.env.LOCALHOSTPORT
 
//////////////////////////////////////////////////
////       TEST ALL STATIC HTML PAGES        //// 
////////////////////////////////////////////////

var siteIndex = [
  {
    "loc": "/"
  },
  {
    "loc": "/database"
  },
  {
    "loc": "/tools"
  },
  {
    "loc": "/shop"
  },
  {
    "loc": "/forms"
  },
  {
    "loc": "/configuration"
  },
  {
    "loc": "/assemblies"
  },
  {
    "loc": "/components"
  },
  {
    "loc": "/gamedata"
  },
  {
    "loc": "/gameform"
  },
  {
    "loc": "/semini/navigation"
  },
  {
    "loc": "/semini/view"
  },
  {
    "loc": "/issues/view"
  },
  {
    "loc": "/terms"
  },
  {
    "loc": "/Privacy"
  },
  {
    "loc": "/privacy"
  },
  {
    "loc": "/contact"
  },
  {
    "loc": "/database/docs"
  }
]
 
  
 
var testlist=[]
for (var i = 0; i < siteIndex.length; i++) {
	testlist.push(siteIndex[i].loc)	
}

describe("Minimum End point testing of heavylifting", () => {
  test.each(testlist)(
    "given %p endpoint should return a 200.",
    async (firstArg,done) => {
    request(app)
      .get(firstArg)
      .expect('Content-Type', /charset=utf-8/)
      .expect(200, done);
    }
  );
});



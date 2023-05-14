const request = require('supertest');
const express = require('express');


 

//This looks for the presence of these teampltes in the site directory.
var testlist = [
'./views/partials/docs_splash.handlebars',
'./views/partials/navigation.handlebars',
'./views/partials/topofpage.handlebars',
'./views/404.handlebars',
'./views/500.handlebars',
'./views/contact.handlebars',
]



describe('Check presence of Heavylifting templates in the site.', function() {
 test.each(testlist)(
  "given %p endpoint should return boolean test of true for presence of forms and qty check on forms.",
 function(firstArg,done) {
      const fs = require('fs');//use the file system plugin 
      var rawdata = fs.readFileSync(firstArg); // get the heavylifting json and parse into an object for use.
      expect(rawdata).toBeDefined();//Make sure the file is defined.
    done();
  }
  );
});
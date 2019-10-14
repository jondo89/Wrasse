///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
 console.log('4')
var myModule = require('../../../app.json');
var sitename = myModule.sitename
var website = myModule.website
var repo = myModule.repo

var wrasseModel = require('../models/wrasse.js'); 
 
///////////////////////////////////////////////
///////   GET ALL ISSUES ALL USERS    ////////
/////////////////////////////////////////////
exports.getallissues = function(req, res, next) {
  console.log('Loading middleware , get all issues')
 

  next();
      };



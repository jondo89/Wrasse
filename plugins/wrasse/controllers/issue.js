 
var User = require('../../../models/User');
var braintree = require("braintree");

////////////////////////////////////////////
///////   BRAINTREE INTEGRATION    ////////
//////////////////////////////////////////
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY
});

///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
var myModule = require('../../../app.json');
var sitename = myModule.sitename
var website = myModule.website
var repo = myModule.repo

/////////////////////////////
/////  CREATE ISSUE    ///// 
///////////////////////////
exports.createissue = function(req, res) {
  res.render('tools/createissue',{
    pagetitle: 'createissue | '+sitename+'',
    layout:false
  })
}; 

/////////////////////////////
/////  READ ISSUE    ///// 
///////////////////////////
exports.readissue = function(req, res) {
  res.render('tools/readissue',{
    pagetitle: 'read issue | '+sitename+'',
    layout:false
  })
}; 

/////////////////////////////
/////  UPDATE ISSUE    ///// 
///////////////////////////
exports.updateissue = function(req, res) {
  res.render('tools/updateissue',{
    pagetitle: 'updateissue | '+sitename+'',
    layout:false
  })
}; 

/////////////////////////////
/////  DELETE ISSUE    ///// 
///////////////////////////
exports.deleteissue = function(req, res) {
  res.render('tools/deleteissue',{
    pagetitle: 'deleteissue | '+sitename+'',
    layout:false
  })
}; 
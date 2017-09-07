 
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

////////////////////////
/////  PHASE 1    ///// 
//////////////////////
exports.primer = function(req, res) {
  res.render('primer',{
    pagetitle: 'primer | '+sitename+'',
  })
}; 

////////////////////////
/////  PHASE 2    ///// 
//////////////////////
exports.working = function(req, res) {
  res.render('working',{
    pagetitle: 'working | '+sitename+'',
  })
}; 
 
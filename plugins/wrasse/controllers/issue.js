 
var User = require('../../../models/User');
 

///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
var myModule = require('../../../app.json');
var sitename = myModule.sitename
var website = myModule.website
var repo = myModule.repo

/////////////////////////////////
////       DEBUGGING        //// 
///////////////////////////////
var debugMode = true
function debugging(req,query){
  if (query) {
    console.log()
    console.log('----------  DEBUGGING  ----------')
    console.log('Directory Name : '+__dirname)
    console.log('Original req URL : '+req.originalUrl)
    console.log('----------  DEBUGGING  ----------')
    console.log()
  }
}

///////////////////////////////////////////
////       ISSUE PAGE ROUTING         //// 
/////////////////////////////////////////
exports.issues = function(req, res) {
    var ids = '58d371b01373c63dccdee169'
    var Formids = '58aa74140b9d3241280ecf17'
    res.render('../../../plugins/wrasse/views/issues', {
      pagetitle: 'Components | '+sitename ,
      items : JSON.stringify(ids),
      Formids : JSON.stringify(Formids)
    }); 
}
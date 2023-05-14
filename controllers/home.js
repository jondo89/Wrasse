var User = require('../models/User');
//set the plugin controller directory
var directory =  '../'
///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
var myModule = require('../app.json');
var sitename = myModule.sitename
var tagline = myModule.tagline
var website = myModule.website
var repo = myModule.repo
///////////////////////////////////////
////       HOME CONTROLLER        //// 
/////////////////////////////////////
exports.index = function(req, res) {
//Perform Routing for Varios user type on the home page.
if (req.user) {
    if (req.user.firstsignup == '/signup-step2') {
        res.redirect('/signup-step2')
    } else {
        if (!req.user.image) {
            req.flash('success', { msg: 'Get started by customizing your user account. <a href="/users/'+req.user.username+'/settings/profile" class="btn btn-outline-secondary">Edit your profile</a>' });
            res.render('../node_modules/fraternate/views/splash', {
                organizations : req.organizations,
                organizationsParse:req.organizationsParse,
                pagetitle: req.user.username +' | '+sitename+'',
                siteName : sitename,
            });
        } else {
           res.render('../node_modules/fraternate/views/splash', {
            organizations : req.organizations,
            organizationsParse:req.organizationsParse,
            pagetitle: req.user.username +' | '+sitename+'',
            siteName : sitename ,
        });
       }
   }
} else {
  res.render('../public/homepage/index', {
    layout: false,
    siteName : sitename,
    pagetitle: sitename+' | '+tagline,
    sitekey:process.env.SITE_KEY,
    homejs:'home' ,
    collections : res.locals.collections
});
}
};
//////////////////////////////////////////
////       CONTACT CONTROLLER        //// 
////////////////////////////////////////
exports.contact = function(req, res) {
  res.render('contact', {
    pagetitle: 'Contact Us | '+sitename+'',
    siteName : sitename,
});
};

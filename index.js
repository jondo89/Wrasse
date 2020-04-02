var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');
var recaptcha = require('express-recaptcha');
var braintree = require("braintree");
var helpers = require('handlebars-helpers')(['string']);
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);


// Load environment variables from .env file
 
dotenv.config()
 
//Primary app variable.
var app = express();

///////////////////////////////////////
///////   FAVICON LOCATION    ////////
/////////////////////////////////////
var favicon = require('serve-favicon');
try {
  app.use(favicon(__dirname + '/public/img/favicon/favicon-16x16.png'));   
} catch (err){
  console.log('Favicon not found in the required directory.')
}

////////////////////////////////////////////////////
///////   HEROKU VS LOCALHOST .ENV SWAP    ////////
//////////////////////////////////////////////////
if (process.env.MONGODB_URI) {
  mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(
  () => console.log('\x1b[36m%s\x1b[0m', 'mongoose connection ok')
  )
.catch(err => {
console.log('DB Connection Error:'+ err.message);
})
} else {
  mongoose
  .connect('mongodb://localhost:27017/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('\x1b[36m%s\x1b[0m', 'mongoose connection ok'))
.catch(err => {
console.log('DB Connection Error:'+ err.message);
})
}

//Mongo error trap.
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
}); 


 
////////////////////////////////////////////
///////   BRAINTREE INTEGRATION    ////////
//////////////////////////////////////////
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY
});

/////////////////////////////////////////////
///////   HTTPS TRAFFIC REDIRECT    ////////
///////////////////////////////////////////
// Redirect all HTTP traffic to HTTPS
 function ensureSecure(req, res, next){
  if(req.headers["x-forwarded-proto"] === "https"){
  // OK, continue
  return next();
};
res.redirect('https://'+req.hostname+req.url);
};
// Handle environments
if (app.get('env') == 'production') {
  app.all('*', ensureSecure);
}

/////////////////////////////////////////////
///////   LOCALHOST PORT SETTING    ////////
///////////////////////////////////////////
app.set('port', process.env.PORT || 5000);


app.use(compression());
app.use(logger('dev'));

//This pumps up the payload to accomidate larger data sets
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//extend
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
 


app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

//This is to allow for NPM updating of Javascipt packages.
app.use('/scripts/quill', express.static(path.join(__dirname, 'node_modules/quill/dist')));


///////////////////////////////////////////////s
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
var myModule = require('./app.json');
var sitename = myModule.sitename
var website = myModule.website
var description = myModule.description
var repo = myModule.repo
app.locals.sitename = sitename
app.locals.website = website
app.locals.repo = repo
app.locals.description = description
var partialsDir = ['views/partials']

///////////////////////////////
////       ROUTING        //// 
/////////////////////////////

///////////////////////////////////////////
////       WRASSE NPM MODULE          //// 
/////////////////////////////////////////
var cleanerwrasse = require("cleaner-wrasse");
//Append the partial directory inside the NPM module.
partialsDir.push('./node_modules/cleaner-wrasse/views/partials')
app.use('/', cleanerwrasse);

///////////////////////////////////////////////
////       FRATERNATE NPM MODULE          //// 
/////////////////////////////////////////////
var fraternate = require("fraternate");
//Append the partial directory inside the NPM module.
partialsDir.push('./node_modules/fraternate/views/partials')
app.use('/', fraternate);
 


 
 

/////////////////////////////////////////
///////   HANDLEBARS HELPERS    ////////
///////////////////////////////////////
var hbs = exphbs.create({
  defaultLayout: __dirname+'/views/layouts/main',
  partialsDir:partialsDir,
  helpers: {
    ifEquals: function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
},
    getNullsasblank :function(val) {
    if(val === undefined ||val =='undefined') {
        return "null";
    }
    return val;
},
debug: function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);

  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
},
    toJSON : function(object) {
      return JSON.stringify(object, null, 2);
    },
    partial: function (name) {
      return name;
    },
    'dotdotdot' : function(str) {
      if (str) {
        if (str.length > 16)
          return str.substring(0,16) + '...';
        return str;}
      },
      'dotdotdotdot' : function(str) {
        if (str) {
          if (str.length > 200)
            return str.substring(0,200) + '...';
          return str;
        }
      },
      'dotdotdotdotdot' : function(str) {
        if (str) {
          if (str.length > 400)
            return str.substring(0,400) + '...';
          return str;
        }
      },  
      'dots' : function(str) {
        if (str) {
          if (str.length > 150)
            return str.substring(0,150) + '...';
          return str;
        }
      },
      'profile' : function(str) {
        if (str) {
          if (str.length > 550)
            return str.substring(0,550) + '...';
          return str;
        }
      }
    }
  });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
/////////////////////////////
////       500          //// 
/////////////////////////// 
app.use(function(err, req, res, next) {
  // log the error, treat it like a 500 internal server error
  // maybe also log the request so you have more debug information
  //log.error(err, req);
  // during development you may want to print the errors to your console
  console.log(err.stack,"trigger 500 errors");
  req.flash('error', { msg: JSON.stringify(err)});
  // send back a 500 with a generic message
  res.status(500);
  res.redirect('/500');
});

/////////////////////////////
////       500          //// 
///////////////////////////
app.get('/500', function(req, res){
  console.log('Calling the 500 error')
  res.render('500',{
    siteName : sitename,
    pagetitle : 'Error 500' + ' | '+sitename,
    layout:false
  });
}); 

/////////////////////////////
////       404          //// 
///////////////////////////
app.get('*', function(req, res){
  res.render('404',{
    siteName : sitename,
    pagetitle : 'Error 404' + ' | '+sitename,
    layout:false
  });
});


// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;



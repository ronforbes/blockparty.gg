const firebaseAdmin = require('firebase-admin');
const serviceAccountDev = require('./serviceAccountDev.json');
const serviceAccountProd = require('./serviceAccountProd.json');

// Initialize firebase admin
var initialize = () => {
  var serviceAccount;
  var databaseURL;
  if(process.env.NODE_ENV === 'production') {
    serviceAccount = serviceAccountProd;
    databaseURL = "https://block-party-31d52.firebaseio.com";
  }
  else {
    serviceAccount = serviceAccountDev;
    databaseURL = "https://block-party-development.firebaseio.com";
  }
    
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: databaseURL
  });
}

exports.initialize = initialize;
exports.firebaseAdmin = firebaseAdmin;
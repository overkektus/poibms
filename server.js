const https = require('https');
const pem = require('pem');
const express = require('express');
 
pem.config({
  pathOpenSSL: '/usr/local/Cellar/openssl/1.0.2n/bin/openssl'
});

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err;
  }

  const app = express();
 
  app.get('/', function (req, res) {
    res.send('o hai!')
  });
 
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(3000);
});
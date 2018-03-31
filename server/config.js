const path = require('path');

module.exports = {
  port: 4300,
  openSSLpath: path.resolve(path.dirname(process.env.OPENSSL_CONF), 'openssl.exe'),
  // algorithm: 'aes-256-ctr',
  algorithm: 'aes256',
  hash: 'sha256'
};
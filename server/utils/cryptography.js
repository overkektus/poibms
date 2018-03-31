const crypto = require('crypto');
const config = require('../config');

const encrypt = (data, key) => {
  // const cipher = crypto.createCipher(config.algorithm, key)
  // let crypted = cipher.update(data, 'utf8', 'base64')
  // crypted += cipher.final('base64');
  // return crypted;

  const cipher = crypto.createCipher(config.algorithm, key);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const decrypt = (data, key) => {
  // const decipher = crypto.createCipher(config.algorithm, key)
  // let dec = decipher.update(data, 'base64', 'utf8')
  // dec += decipher.final('utf8');
  // return dec;
  
  const decipher = crypto.createDecipher(config.algorithm, key);
  let decrypted = decipher.update(data, 'binary', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const getHash = (data) => {
  const hash = crypto.createHash(config.hash);
  hash.update(data);
  return hash.digest('hex').toUpperCase();
};

module.exports = {
  encrypt,
  decrypt,
  getHash
};

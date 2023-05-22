const { auth } = require('express-oauth2-jwt-bearer');
const config = require('../config/config')

const jwtCheck = auth({
    audience:config.auth0.audience,
    issuerBaseURL: config.auth0.issuer,
    tokenSigningAlg: 'RS256'
  });

module.exports = {jwtCheck}
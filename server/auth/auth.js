const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://rejam.eu.auth0.com/.well-known/jwks.json',
  }),

  // Validate the audience and the issuer.
  audience: 'nJjmZn9DX1N1Q4zOete94a7ek7SfQizO',
  issuer: 'https://rejam.eu.auth0.com/',
  algorithms: ['RS256'],
});

module.exports = checkJwt;

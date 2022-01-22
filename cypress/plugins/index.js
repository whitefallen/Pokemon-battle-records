const encrypt = require('cypress-nextjs-auth0/encrypt');

const pluginConfig = async (on, config) => {
  // required for cypress-nextjs-auth0/encrypt
  on('task', { encrypt });

  // remap some of the .env values, because cypress-nextjs-auth0/encrypt
  // requires them to be with other names
  config.env.auth0Audience = process.env.AUTH0_AUDIENCE;
  config.env.auth0Domain = process.env.AUTH0_ISSUER_BASE_URL;
  config.env.auth0ClientId = process.env.AUTH0_CLIENT_ID;
  config.env.auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
  config.env.auth0CookieSecret = process.env.AUTH0_SECRET;
  config.env.auth0Scope = 'openid profile email';
  config.env.auth0SessionCookieName = 'appSession';
  config.env.auth0Username = process.env.AUTH0_CYPRESS_USERNAME;
  config.env.auth0Password = process.env.AUTH0_CYPRESS_PASSWORD;

  return config;
};

module.exports=pluginConfig;

module.exports = ({ env }) => ({
  url: env('NEXT_PUBLIC_STRAPI_API_URL'),
  /*host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },*/
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36bb2caeeb834bd6cfc0a52224db143a'),
  },
});

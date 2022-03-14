module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '113036a75efb9c0324b0f48dfe328938'),
  },
});

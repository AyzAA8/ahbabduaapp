module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','h5v4UAHAAlCCuxzp1t3NTBz/0OGTJpxOY4IpgblWEOg='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'fXBrjWVtny8ElJDbCpktsQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

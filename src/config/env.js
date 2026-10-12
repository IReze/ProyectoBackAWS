module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'SuperSecretZeroTrustKey_2026_SecureOps!',
  MOCK_USER: {
    username: 'admin',
    password: 'Password123!',
    role: 'Security Analyst / SecOps',
    name: 'Kevin Martinez'
  }
};
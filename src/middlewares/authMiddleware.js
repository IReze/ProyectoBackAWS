const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ 
      error: 'Acceso Denegado: Token requerido (Zero Trust enforcement)' 
    });
  }

  const token = authHeader.split(' ')[1];
  
  jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ 
        error: 'Token inválido o expirado' 
      });
    }
    req.user = decodedUser;
    next();
  });
};

module.exports = authenticateJWT;
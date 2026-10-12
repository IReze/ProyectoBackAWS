const jwt = require('jsonwebtoken');
const { MOCK_USER, JWT_SECRET } = require('../config/env');

const login = (req, res) => {
  const { username, password } = req.body;

  if (username === MOCK_USER.username && password === MOCK_USER.password) {
    const token = jwt.sign(
      { 
        username: MOCK_USER.username, 
        role: MOCK_USER.role, 
        name: MOCK_USER.name 
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    console.log(`[AUTH SUCCESS] Usuario ${username} autenticado exitosamente.`);
    return res.json({
      token,
      user: {
        username: MOCK_USER.username,
        role: MOCK_USER.role,
        name: MOCK_USER.name
      }
    });
  }

  // Log de auditoría para detección de fuerza bruta / Fail2Ban
  console.warn(`[AUTH FAILED] Intento no autorizado para el usuario: '${username}'`);
  return res.status(401).json({ error: 'Credenciales inválidas' });
};

module.exports = { login };
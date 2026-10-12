const jwt = require('jsonwebtoken');
const { MOCK_USERS, JWT_SECRET } = require('../config/env');

const login = (req, res) => {
  const { username, password } = req.body;

  // Busca en la lista de usuarios autorizados
  const foundUser = MOCK_USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (foundUser) {
    const token = jwt.sign(
      { 
        username: foundUser.username, 
        role: foundUser.role, 
        name: foundUser.name 
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    console.log(`[AUTH SUCCESS] Usuario '${foundUser.username}' autenticado exitosamente.`);
    return res.json({
      token,
      user: {
        username: foundUser.username,
        role: foundUser.role,
        name: foundUser.name
      }
    });
  }

  // Si no coincide con ninguno, se registra el fallo para Fail2Ban
  console.warn(`[AUTH FAILED] Intento no autorizado para el usuario: '${username}'`);
  return res.status(401).json({ error: 'Credenciales inválidas' });
};

module.exports = { login };
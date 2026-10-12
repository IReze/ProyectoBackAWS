const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config/env');
const authRoutes = require('./src/routes/authRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint de verificación de estado
app.get('/api/health', (req, res) => {
  res.json({ status: 'HEALTHY', zone: 'VPC-Backend-Private', timestamp: new Date().toISOString() });
});

// Enrutadores desacoplados
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[BACKEND RUNNING] API escuchando en el puerto ${PORT} en la red privada.`);
});
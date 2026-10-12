const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware');
const { getDashboardData } = require('../controllers/dashboardController');

router.get('/data', authenticateJWT, getDashboardData);

module.exports = router;
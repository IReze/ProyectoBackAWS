const getDashboardData = (req, res) => {
  res.json({
    message: 'Acceso concedido al núcleo privado de la infraestructura',
    user: req.user,
    systemMetrics: {
      zeroTrustCompliance: '100% Enforced',
      isolatedVpc: 'VPC-Backend-17 (Sin salida a Internet)',
      firewall: 'UFW Activo (Solo tráfico entrante desde Frontend)',
      threatLevel: 'Nominal',
      encryption: 'TLS 1.3 / JWT HMAC-SHA256'
    },
    auditLogs: [
      { id: 1, event: 'VPC Peering Handshake', status: 'OK', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, event: 'UFW Rule Inspection', status: 'ALLOW', port: 3000, source: '10.17.1.0/24' },
      { id: 3, event: 'JWT Signature Verification', status: 'VALIDATED', user: req.user.username }
    ]
  });
};

module.exports = { getDashboardData };
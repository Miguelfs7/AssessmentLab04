const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const FAKE_USER = {
  id: 1,
  nome: 'João Silva',
  email: 'joao@example.com',
  password: '1234'
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== FAKE_USER.email || password !== FAKE_USER.password) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { id: FAKE_USER.id, nome: FAKE_USER.nome, email: FAKE_USER.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;

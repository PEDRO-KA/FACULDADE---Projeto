const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/', (req, res) => {
  const { nome, cnpj, endereco, contato } = req.body;
  db.run(
    `INSERT INTO fornecedores VALUES (NULL, ?, ?, ?, ?)`,
    [nome, cnpj, endereco, contato],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

router.get('/', (req, res) => {
  db.all(`SELECT * FROM fornecedores`, [], (err, rows) => {
    res.json(rows);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/', (req, res) => {
  const { nome, descricao, preco, codigo_barras } = req.body;
  db.run(
    `INSERT INTO produtos VALUES (NULL, ?, ?, ?, ?)`,
    [nome, descricao, preco, codigo_barras],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

router.get('/', (req, res) => {
  db.all(`SELECT * FROM produtos`, [], (err, rows) => {
    res.json(rows);
  });
});

module.exports = router;

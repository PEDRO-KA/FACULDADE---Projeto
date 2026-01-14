const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/', (req, res) => {
  const { produto_id, fornecedor_id } = req.body;
  db.run(
    `INSERT INTO produto_fornecedor VALUES (?, ?)`,
    [produto_id, fornecedor_id],
    () => res.json({ message: 'Associado com sucesso' })
  );
});

router.get('/produto/:id', (req, res) => {
  db.all(
    `
    SELECT f.*
    FROM fornecedores f
    JOIN produto_fornecedor pf ON f.id = pf.fornecedor_id
    WHERE pf.produto_id = ?
    `,
    [req.params.id],
    (err, rows) => res.json(rows)
  );
});

module.exports = router;

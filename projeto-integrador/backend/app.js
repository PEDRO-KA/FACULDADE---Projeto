const express = require('express');
const app = express();

app.use(express.json());

app.use('/produtos', require('./routes/produto.routes'));
app.use('/fornecedores', require('./routes/fornecedor.routes'));
app.use('/associacoes', require('./routes/associacao.routes'));

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

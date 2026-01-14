import { useState } from 'react';

export default function Associacoes() {
  const [produto, setProduto] = useState('');
  const [fornecedor, setFornecedor] = useState('');

  const associar = async () => {
    await fetch('http://localhost:3000/associacoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ produto_id: produto, fornecedor_id: fornecedor })
    });
    alert('Associado');
  };

  return (
    <div>
      <h2>Associar Produto / Fornecedor</h2>
      <input placeholder="Produto ID" onChange={e => setProduto(e.target.value)} />
      <input placeholder="Fornecedor ID" onChange={e => setFornecedor(e.target.value)} />
      <button onClick={associar}>Associar</button>
    </div>
  );
}

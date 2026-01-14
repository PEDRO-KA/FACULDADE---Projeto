import { useState } from 'react';

export default function Produtos() {
  const [nome, setNome] = useState('');

  const salvar = async () => {
    await fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });
    alert('Produto salvo');
  };

  return (
    <div>
      <h2>Produtos</h2>
      <input onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

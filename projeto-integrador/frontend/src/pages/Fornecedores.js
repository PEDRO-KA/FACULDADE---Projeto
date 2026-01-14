import { useState } from 'react';

export default function Fornecedores() {
  const [nome, setNome] = useState('');

  const salvar = async () => {
    await fetch('http://localhost:3000/fornecedores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });
    alert('Fornecedor salvo');
  };

  return (
    <div>
      <h2>Fornecedores</h2>
      <input onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

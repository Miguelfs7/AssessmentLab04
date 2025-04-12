// server.js

const express = require('express');
const app = express();
const PORT = 3001;

// Dados simulados do cliente
const clienteDados = {
  clienteId: "12345",
  nome: "João Silva",
  endereco: {
    rua: "Rua Exemplo",
    numero: "42",
    cidade: "Lisboa",
    codigoPostal: "1234-567"
  },
  consumo: [
    {
      mes: "Janeiro",
      ano: 2023,
      kWhConsumido: 250,
      custoTotal: 35.50,
      dataLeitura: "2023-01-31"
    }
  ],
  informacoesAdicionais: {
    tipoTarifa: "Residencial",
    fornecedorEnergia: "Empresa XYZ",
    contratoAtivo: true
  }
};

// Endpoint para retornar os dados
app.get('/api/consumo', (req, res) => {
  res.json(clienteDados);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});

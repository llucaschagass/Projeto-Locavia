const express = require('express');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rota para adicionar veículos
app.post('/api/veiculos', async (req, res) => {
  try {
    const novoVeiculo = req.body;
    const veiculoCriado = await controllers.createVeiculo(novoVeiculo);
    res.status(201).json({ message: 'Veículo adicionado com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar veículo:', error);
    res.status(500).json({ message: 'Erro ao adicionar veículo.' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});


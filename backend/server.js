// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const port = 3000;

const veiculosFilePath = path.join(__dirname, 'data', 'veiculos.json');

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rota para adicionar veículos
app.post('/api/veiculos', async (req, res) => {
  try {
    const veiculoData = req.body;

    // Lógica para ler veiculos.json
    const veiculosJson = await fs.readFile(veiculosFilePath, 'utf-8');
    const veiculos = JSON.parse(veiculosJson);

    // Adicionar novo veículo
    veiculos.push(veiculoData);

    // Escrever de volta em veiculos.json
    await fs.writeFile(veiculosFilePath, JSON.stringify(veiculos, null, 2), 'utf-8');

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

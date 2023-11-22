// routers.js

const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// Rota para obter todos os veículos
router.get('/api/veiculos', controllers.getAllVeiculos);

// Rota para obter um veículo pelo ID
router.get('/api/veiculos/:id', controllers.getVeiculoById);

// Rota para criar um novo veículo
router.post('/api/veiculos', controllers.createVeiculo);

// Rota para atualizar um veículo pelo ID
router.put('/api/veiculos/:id', controllers.updateVeiculo);

// Rota para deletar um veículo pelo ID
router.delete('/api/veiculos/:id', controllers.deleteVeiculo);

module.exports = router;

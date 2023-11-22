const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'veiculos.json');

async function readData() {
  try {
    const rawData = await fs.readFile(dataPath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Erro ao ler dados:', error);
    throw error;
  }
}

async function writeData(data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(dataPath, jsonData);
  } catch (error) {
    console.error('Erro ao escrever dados:', error);
    throw error;
  }
}

async function getAllVeiculos(req, res) {
  try {
    const todosVeiculos = await readData();
    res.status(200).json(todosVeiculos);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ message: 'Erro ao obter veículos.' });
  }
}

async function getVeiculoById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const veiculos = await readData();
    const veiculoPorId = veiculos.find((veiculo) => veiculo.id === id);

    if (veiculoPorId) {
      res.status(200).json(veiculoPorId);
    } else {
      res.status(404).json({ message: 'Veículo não encontrado.' });
    }
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ message: 'Erro ao obter veículo.' });
  }
}

async function createVeiculo(req, res) {
  try {
    const veiculos = await readData();
    const novoVeiculo = {
      id: veiculos.length + 1,
      placa: req.body.placa,
      chassi: req.body.chassi,
      renavam: req.body.renavam,
      modelo: req.body.modelo,
      marca: req.body.marca,
      ano: req.body.ano,
    };
    veiculos.push(novoVeiculo);
    await writeData(veiculos);

    res.status(201).json(novoVeiculo);
  } catch (error) {
    console.error('Erro ao criar veículo:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

async function updateVeiculo(req, res) {
  try {
    const id = parseInt(req.params.id);
    const newData = req.body;
    const veiculos = await readData();
    const veiculoIndex = veiculos.findIndex((veiculo) => veiculo.id === id);

    if (veiculoIndex !== -1) {
      veiculos[veiculoIndex] = { ...veiculos[veiculoIndex], ...newData };
      await writeData(veiculos);
      res.status(200).json(veiculos[veiculoIndex]);
    } else {
      res.status(404).json({ message: 'Veículo não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    res.status(500).json({ message: 'Erro ao atualizar veículo.' });
  }
}

async function deleteVeiculo(req, res) {
  try {
    const id = parseInt(req.params.id);
    const veiculos = await readData();
    const updatedVeiculos = veiculos.filter((veiculo) => veiculo.id !== id);
    await writeData(updatedVeiculos);
    res.status(200).json(updatedVeiculos);
  } catch (error) {
    console.error('Erro ao excluir veículo:', error);
    res.status(500).json({ message: 'Erro ao excluir veículo.' });
  }
}

module.exports = {
  getAllVeiculos,
  getVeiculoById,
  createVeiculo,
  updateVeiculo,
  deleteVeiculo,
};

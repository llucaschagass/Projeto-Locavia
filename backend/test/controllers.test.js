const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../backend/index'); // Caminho para o arquivo index.js no diretório backend
const controllers = require('../backend/controllers'); // Caminho para o arquivo controllers.js no diretório backend

chai.use(chaiHttp);
const expect = chai.expect;

describe('Veiculos API', () => {
  // Teste para getAllVeiculos
  describe('GET /api/veiculos', () => {
    it('Deve retornar todos os veículos', (done) => {
      chai.request(app)
        .get('/api/veiculos')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  //Teste para getVeiculoById
  describe('GET /api/veiculos/:id', () => {
    it('Deve retornar um veículo pelo ID', (done) => {
      const veiculoId = 1; // Substitua pelo ID existente no seu conjunto de dados
      chai.request(app)
        .get(`/api/veiculos/${veiculoId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  //Teste para createVeiculo
  describe('POST /api/veiculos', () => {
    it('Deve criar um novo veículo', (done) => {
      const novoVeiculo = {
        placa: 'ABC1234',
        chassi: '12345678901234567',
        renavam: '12345678901',
        modelo: 'Modelo',
        marca: 'Marca',
        ano: 2023,
      };
      chai.request(app)
        .post('/api/veiculos')
        .send(novoVeiculo)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  //Teste para updateVeiculo
  describe('PUT /api/veiculos/:id', () => {
    it('Deve atualizar um veículo existente', (done) => {
      const veiculoId = 1; // Substitua pelo ID existente no seu conjunto de dados
      const dadosAtualizados = {
        modelo: 'Novo Modelo',
      };
      chai.request(app)
        .put(`/api/veiculos/${veiculoId}`)
        .send(dadosAtualizados)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  //Teste para deleteVeiculo
  describe('DELETE /api/veiculos/:id', () => {
    it('Deve deletar um veículo existente', (done) => {
      const veiculoId = 1; // Substitua pelo ID existente no seu conjunto de dados
      chai.request(app)
        .delete(`/api/veiculos/${veiculoId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  
});

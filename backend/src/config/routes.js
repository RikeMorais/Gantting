const express = require('express');

module.exports = function(server) {

    //Definir URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    //Rotas de Cadastro de Tarefas
    const tarefaService = require('../api/tarefa/tarefaService');
    tarefaService.register(router, '/tarefa');
}
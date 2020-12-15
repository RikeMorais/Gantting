const restful = require('node-restful');
const mongoose = restful.mongoose;

const createSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    prioridade: {type: String, required: false, uppercase: true, 
        enum: ['URGENTE', 'ALTA', 'MÉDIA', 'BAIXA']},
    dtini: {type: Date, required: true},
    dtfim: {type: Date, required: false},
    assignee: {type: String, required: true},
    situation: {type: Boolean, required: false}    
});

const cycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    task: [createSchema]
});

module.exports = restful.model('cycle', cycleSchema);
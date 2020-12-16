const restful = require('node-restful');
const mongoose = restful.mongoose;

const tarefa = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    assignee: {type: String, required: true},   
});

const cycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    tarefa: [tarefa]
});

module.exports = restful.model('cycle', cycleSchema);
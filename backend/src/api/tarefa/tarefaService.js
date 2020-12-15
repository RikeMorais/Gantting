const tarefaService = require('./tarefa');

tarefaService.methods(['get', 'post', 'put', 'delete']);
tarefaService.updateOptions({new: true, runValidators: true});

tarefaService.route('get', (req, res, next) => {

    tarefaService.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})

module.exports = tarefaService
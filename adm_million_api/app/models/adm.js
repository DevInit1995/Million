let mongoose = require('../../db/conexao.js');

const Adm = mongoose.model('user', {
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
});

module.exports = Adm;


var mongoose = require('mongoose')

var conexao = ()=>{
    var caminho = mongoose.connect('mongodb+srv://Heitor1:He050905@cluster0.prjog.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}
var schema = mongoose.Schema

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    Cargo:String
})

var documentos = mongoose.model('depoimentos',depoimentos)

module.exports = {conexao, documentos}

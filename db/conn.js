const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

async function main(){
    await mogoose.connect('mongodb://localhost:27017/testemongoDB')
    console.log('Banco conectado!')
}

main().catch(erro => console.log('Erro: ', erro))

module.exports = mongoose
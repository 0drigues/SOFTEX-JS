//chamada do sequelize
const Sequelize = require("Sequelize");
const sequelize = new Sequelize('dadosengquimica', 'root', '53090140', {
    host: "localhost",
    dialect: 'mysql'
});

//autenticação de conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
});

const Enzima = sequelize.define('enzimas', {
    concentracaoS: {
        type: Sequelize.FLOAT           //criação de uma coluna do tipo float
    },

    vcomumV: {
        type: Sequelize.FLOAT
    },

    vinibVi: {
        type: Sequelize.FLOAT
    }
});

//Enzima.sync({force: true});      //sincronização deste arquivo .js com o mysql para a geração da tabela (forçado, caso algo de errado aconteça)

//inserção de dados nas tabelas do mysql
Enzima.create({
    concentracaoS: 3,
    vcomumV: 4.58,
    vinibVi: 3.66
});
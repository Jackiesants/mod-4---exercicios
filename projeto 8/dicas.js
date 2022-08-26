const Sequelize = require('sequelize')
const database = require('./db')

const Dicas = database.define('dicas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    nome: { type: Sequelize.STRING,
        allowNull: false }
     
});

module.exports = Dicas
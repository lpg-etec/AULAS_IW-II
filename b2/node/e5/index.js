const express = require('express');
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('e');
}).catch(function() {
    console.log('eeee');
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: 'ee',
    conteudo: 'eeeee'
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "eee",
    sobrenome: "e",
    idade: 500,
    email: "eee@ee.com"
});

app.get('/', (req, res) => {
    return res.render('formulario');
});

app.post('/add', (req, res) => {
    return res.status(200).end();
})

app.listen(8000);
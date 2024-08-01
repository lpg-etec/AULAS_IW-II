const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // seu usuário do MySQL
  database: 'crud_nodejs'
});

// Conectar ao MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Middleware para o body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração do EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rota principal para listar clientes
app.get('/', (req, res) => {
  let sql = 'SELECT * FROM clientes';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render('index', { clientes: result });
  });
});

// Rota para exibir o formulário de adição de cliente
app.get('/add', (req, res) => {
  res.render('add');
});

// Rota para processar o formulário de adição de cliente
app.post('/add', (req, res) => {
  let cliente = { nome: req.body.nome, email: req.body.email, telefone: req.body.telefone };
  let sql = 'INSERT INTO clientes SET ?';
  db.query(sql, cliente, (err, result) => {
    if (err) throw err;
    console.log('Cliente adicionado: ', result);
    res.redirect('/');
  });
});

// Rota para exibir o formulário de edição de cliente
app.get('/edit/:id', (req, res) => {
  let sql = `SELECT * FROM clientes WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render('edit', { cliente: result[0] });
  });
});

// Rota para processar o formulário de edição de cliente
app.post('/edit/:id', (req, res) => {
  let novoCliente = { nome: req.body.nome, email: req.body.email, telefone: req.body.telefone };
  let sql = `UPDATE clientes SET ? WHERE id = ${req.params.id}`;
  db.query(sql, novoCliente, (err, result) => {
    if (err) throw err;
    console.log('Cliente atualizado: ', result);
    res.redirect('/');
  });
});

// Rota para deletar um cliente
app.get('/delete/:id', (req, res) => {
  let sql = `DELETE FROM clientes WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Cliente deletado: ', result);
    res.redirect('/');
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

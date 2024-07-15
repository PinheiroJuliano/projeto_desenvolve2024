require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// String de conexão do MongoDB a partir do arquivo .env
const uri = process.env.MONGODB_URI;

// Conectar ao MongoDB usando Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(express.json());

// Modelo genérico para acessar a coleção 'listingsAndReviews'
const GenericModel = mongoose.model('GenericModel', new mongoose.Schema({}, { strict: false }), 'customers');

// Rota para a raiz da aplicação
app.get('/', (req, res) => {
  res.send('Bem-vindo à API');
});

// Rota para criar um novo item na coleção 'listingsAndReviews'
app.post('/items', async (req, res) => {
  try {
    console.log('Recebendo POST /items:', req.body);
    const newItem = new GenericModel(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Erro em POST /items:', error);
    res.status(400).json({ message: error.message });
  }
});

// Rota para obter todos os itens da coleção 'listingsAndReviews'
app.get('/items', async (req, res) => {
  try {
    console.log('Recebendo GET /items');
    const items = await GenericModel.find();
    console.log('Itens encontrados:', items);
    res.status(200).json(items);
  } catch (error) {
    console.error('Erro em GET /items:', error);
    res.status(500).json({ message: error.message });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
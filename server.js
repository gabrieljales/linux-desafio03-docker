'use strict';

// Configurações de ambiente
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { Pool, Client } = require('pg');

const app = express();

app.get('/', (req, res) => {
  res.send('Desafio DIO Linux 03 - Docker');
});

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

client.connect();
client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res);
  }
  client.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Aici vom verifica dacă username-ul și parola sunt corecte
  // Dacă sunt, vom returna un token de autentificare
  // Altfel, vom returna o eroare
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Folosește body-parser pentru a procesa corpul cererilor JSON
app.use(bodyParser.json());

// Adaugă rute pentru aplicația ta
app.get('/', (req, res) => {
    res.send('Bun venit la serverul nostru!');
});

// Pornirea serverului pe portul 3000
app.listen(3000, () => {
    console.log('Serverul rulează pe portul 3000');
});

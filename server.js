const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Folosește body-parser pentru a procesa corpul cererilor JSON
app.use(bodyParser.json());

// Ruta pentru autentificare
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Aici vom verifica dacă username-ul și parola sunt corecte
  // Dacă sunt, vom returna un token de autentificare
  // Altfel, vom returna o eroare
});

// Ruta de bază
app.get('/', (req, res) => {
    res.send('Bun venit la serverul nostru!');
});

// Pornirea serverului pe portul 3000
app.listen(3001, () => {
    console.log('Serverul rulează pe portul 3001');
});

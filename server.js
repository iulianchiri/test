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

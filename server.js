const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Baza de date în memorie
const users = {
    "admin": "password123"  // exemplu de utilizator și parolă
};

// Folosește body-parser pentru a procesa corpul cererilor JSON
app.use(bodyParser.json());


// Ruta pentru a servi pagina de login
app.get('/login', (req, res) => {
    res.sendFile('E:/test/login.html');
});

// Ruta pentru autentificare
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.send('Autentificare reușită!');
    } else {
        res.send('Nume de utilizator sau parolă incorectă!');
    }
});

// Ruta de bază
app.get('/', (req, res) => {
    res.send('Bun venit la serverul nostru!');
});

app.listen(3001, () => {
    console.log('Serverul rulează pe portul 3001');
});


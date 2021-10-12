const express = require('express');
const bookRoutes = require('./routes/booksRoutes');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const emberek = [
        { nev: 'Gabi', kor: 15 },
        { nev: 'Rozi', kor: 26 },
        { nev: 'Teca', kor: 31 }
    ];
    res.render('index', { title: 'Ez a cím', emberek });
});

app.use('/books', bookRoutes);

app.get('/about', (req, res) => {
    res.render('about', { title: 'About oldal'});
});

app.use((req, res) => {
    res.statusCode = 404;
    res.render('404', { title: 'Nem talált oldal!'});
});

app.listen(5000, () => console.log('A szerver figyel a http://localhost:5000 porton...'));
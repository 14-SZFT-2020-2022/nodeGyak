const booksFunction = (req, res) => {
    const emberek = [
        { nev: 'Gabi', kor: 15 },
        { nev: 'Rozi', kor: 26 },
        { nev: 'Vera', kor: 28 },
        { nev: 'Teca', kor: 31 }
    ];
    res.render('books', { title: 'Könyvek', emberek });
};

module.exports = booksFunction;
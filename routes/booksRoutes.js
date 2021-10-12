const express = require('express');
const booksFugg = require('../controllers/booksController');

const router = express.Router();

router.get('/', booksFugg);

module.exports = router;
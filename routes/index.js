const express = require('express');

const router = express.Router();

const indexController = require('../controllers/indexController')

router.get('/', indexController.index);
router.get('/translate', indexController.trans);

module.exports = router;
const express = require('express');

const articleRoutes = require('./article.route')

const router = express.Router();

router.use('/article', articleRoutes);

module.exports = router;
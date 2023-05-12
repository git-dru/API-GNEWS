const express = require('express');
const controller = require('../controllers/article.controller')

const router = express.Router();
router.route('/').get(controller.searchAll);
router.route('/search').get(controller.search);
router.route('/author').get(controller.searchAuthor);
router.route('/title').get(controller.searchTitle);

module.exports = router;
const express = require('express');
const router = express.Router();
const { summarizeTodos } = require('../controllers/summaryController');


router.post('/', summarizeTodos);

module.exports = router;

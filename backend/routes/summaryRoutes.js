const express = require('express');
const router = express.Router();
const { summarizeTodos } = require('../controllers/summaryController');

// POST /summarize
router.post('/', summarizeTodos);

module.exports = router;
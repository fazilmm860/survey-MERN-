const express = require('express')
const { getfeedback, sentFeedback } = require('../controllers/userControllers')

const router = express.Router();

router.post('/send', sentFeedback);
router.get('/getdata', getfeedback);

module.exports = router;
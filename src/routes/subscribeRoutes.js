const express = require('express');
const {
    subscribeChannel,
    addChannel,
    getAllChannels,
    getAllSubscribers, 
    getAllSubscriptions
} = require('../controllers/subscribeControllers.js')

const router = express.Router();

router.post('/addChannel', addChannel)
router.get('/all', getAllChannels)
router.post('/:channelId/subscribe', subscribeChannel)
router.get('/:channelId/subscribers', getAllSubscribers)
router.get('/:channelId/subscriptions', getAllSubscriptions)

module.exports = router;
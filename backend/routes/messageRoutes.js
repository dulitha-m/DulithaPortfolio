const express = require('express');
const router = express.Router();
const {
  createMessage,
  getMessages,
  markMessageAsRead,
  deleteMessage
} = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(createMessage)
  .get(protect, getMessages);

router.route('/:id/read')
  .put(protect, markMessageAsRead);

router.route('/:id')
  .delete(protect, deleteMessage);

module.exports = router;

const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks/taskController');
router.get('/', tasksController.index);
module.exports = router;
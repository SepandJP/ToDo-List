const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks/taskController');
router.get('/', tasksController.index);
router.post('/store', tasksController.store);
router.post('/remove', tasksController.remove);
module.exports = router;
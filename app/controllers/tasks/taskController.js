const taskModel = require('../../models/taskModel');
const crypto = require('crypto');
const basicController = require('../basicController');
exports.index = async (req, res) => {
    const date = basicController.date;
    const tasks = await taskModel.getAll();
    res.render('home', {layout: 'task', tasks, date});
};
exports.store = async (req, res) => {
    const date = basicController.date;
    let errors = {
        title: []
    };
    let hasError = false;
    const newTaskData = {
        id : crypto.randomUUID(),
        title : req.body.newTaskTitle
    };
    if (newTaskData.title.trim().length < 1) {
        hasError = true;
        errors.title.push('The title cannot be empty.');
    }
    if (hasError) {
        const tasks = await taskModel.getAll();
        res.render('home', {layout: 'task', tasks, errors, hasError, date});
    } else {
        const result = await taskModel.create(newTaskData);
        res.redirect('/tasks');
    }
};
exports.remove = async(req, res) => {
    const result = await taskModel.delete(req.body.tId);
    res.redirect('/tasks');
};
exports.check = async(req, res) => {
    const taskId = req.body.tId;
    const taskStatus = await taskModel.getStatus(taskId);
    const result = await taskModel.check(taskId, !taskStatus[0].status);
    res.redirect('/tasks');
};
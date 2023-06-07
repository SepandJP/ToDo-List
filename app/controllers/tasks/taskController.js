const taskModel = require('../../models/taskModel');
const crypto = require('crypto');
exports.index = async (req, res) => {
    const tasks = await taskModel.getAll();
    res.render('home', {layout: 'task', tasks});
};
exports.store = async (req, res) => {
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
        res.render('home', {layout: 'task', tasks, errors, hasError});
    } else {
        const result = await taskModel.create(newTaskData);
        res.redirect('/tasks');
    }
};
exports.remove = async(req, res) => {
    const result = await taskModel.delete(req.body.tId);
    console.log(result);
    res.redirect('/tasks');
};
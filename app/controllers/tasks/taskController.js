const taskModel = require('../../models/task');
const crypto = require('crypto');
exports.index = async (req, res) => {
    const tasks = await taskModel.getAll();
    res.render('home', {layout: 'task', tasks});
};
exports.store = async (req, res) => {
    const newTaskData = {
        id : crypto.randomUUID(),
        title : req.body.newTaskTitle
    };
    const result = await taskModel.create(newTaskData);
    const tasks = await taskModel.getAll();
    res.render('home', {layout: 'task', tasks});
};
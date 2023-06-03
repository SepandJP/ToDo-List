const taskModel = require('../../models/task');
exports.index = async (req, res) => {
    const tasks = await taskModel.getAll()
    console.log(tasks);
    res.render('home', {layout: 'task', tasks});
};
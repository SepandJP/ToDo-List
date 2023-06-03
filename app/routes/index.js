const tasksRouter = require('./tasks');
module.exports = app => {
    app.use('/tasks', tasksRouter);
};
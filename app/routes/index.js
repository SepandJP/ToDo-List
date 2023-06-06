const tasksRouter = require('./tasksRoutes');
module.exports = app => {
    app.use('/tasks', tasksRouter);
};
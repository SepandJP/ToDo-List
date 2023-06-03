const express = require('express');
const app = express();
require('./bootstrap')(app);
require('./routes')(app);

module.exports = () => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`App is running on port ${process.env.APP_PORT}.`);
    });
    
};
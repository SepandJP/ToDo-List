const express = require('express');
const app = express();

module.exports = () => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`App is running on port ${process.env.APP_PORT}.`);
    });
    
};
const express = require('express');
const app = express();
require('./bootstrap')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: 'main'});
});

module.exports = () => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`App is running on port ${process.env.APP_PORT}.`);
    });
    
};
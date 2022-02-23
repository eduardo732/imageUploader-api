const express = require('express');
const routes = require('../routes/imageRoutes')
const fileUpload = require('express-fileupload');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use(fileUpload({
	createParentPath: true
}));

app.use('/api', routes);

module.exports = app;
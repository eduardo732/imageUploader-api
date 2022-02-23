require('dotenv').config()
const app = require('./src/app/server');
const db = require('./src/app/db');
const port = process.env.PORT;
const models = require('./src/models/index');

db.authenticate()
    .then(() => {
        app.listen(port, () => {
            console.log(`Hello! server listening on port ${port}`);
						models.sequelize.sync();
        });
    })
    .catch(err => {
        console.log(err);
    })
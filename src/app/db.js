require('dotenv').config();
const { Sequelize } = require('sequelize');

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dialect = process.env.DB_DIALECT;
const name = process.env.DB_NAME;

module.exports = new Sequelize(name, username, pass, {
	host: host,
	dialect: dialect,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		timestamps: false
	},
});
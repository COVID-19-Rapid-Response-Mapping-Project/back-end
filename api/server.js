const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const authenticate = require('../auth/auth-middleware');
const usersRouter = require('../users/users-router');

const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/users', authenticate, usersRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'all good.' });
});

// Docs test
const docs = require('simple-rest-docs');

const options = {
	files: ['./api/server.js'],
	output: './README.md'
};

docs(options);

/**
 * @title Test Route
 *
 * @desc This is a route to test if the API is up
 *
 * @method GET
 *
 * @url '/'
 *
 * @success-code 200
 *
 * @success-content
 * {
 * 		message: 'all good.'
 * }
 */

module.exports = server;

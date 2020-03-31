const docs = require('simple-rest-docs');

const options = {
	files: ['../index.js', '../api/server.js'],
	output: '../README.md'
};

docs(options);

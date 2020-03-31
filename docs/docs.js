const docs = require('simple-rest-docs');

const options = {
	files: ['./index.js'],
	output: './README.md'
};

docs(options);

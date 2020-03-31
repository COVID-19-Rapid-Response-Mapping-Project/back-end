const db = require('../data/dbConfig');

module.exports = {
	insert,
	findAll,
	findBy
};

function insert(resourceInfo) {
	return db('resources').insert(resourceInfo, 'id');
}

function findAll() {
	return db('resources');
}

function findBy(filter) {
	return db('resources').where({ filter });
}

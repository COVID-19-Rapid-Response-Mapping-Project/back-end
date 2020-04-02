const db = require('../data/dbConfig');

module.exports = {
	insert,
	update,
	remove,
	findAll,
	findBy
};

function insert(resourceInfo) {
	return db('resources').insert(resourceInfo, 'id');
}

function update(id, resourceInfo) {
	return db('users')
		.where({ id })
		.update(resourceInfo, 'id');
}

function remove(id) {
	return db('resources')
		.where({ id })
		.del();
}

function findAll() {
	return db('resources');
}

function findBy(filter) {
	return db('resources').where({ filter });
}

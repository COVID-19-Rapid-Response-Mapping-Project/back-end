const db = require('../data/dbConfig');

module.exports = {
	insert,
	update,
	findAll,
	findBy
};

function insert(userInfo) {
	return db('users').insert(userInfo, 'id');
}

function update(id, userInfo) {
	return db('users')
		.where({ id })
		.update(userInfo, 'id');
}

function findAll() {
	return db('users');
}

function findBy(filter) {
	return db('users').where({ filter });
}

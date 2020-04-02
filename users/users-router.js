const express = require('express');
const Users = require('./users-model');

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
	Users.findAll()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			res.status(500).json({ error: 'issue getting users', err });
		});
});

// GET a user
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Users.findBy(id)
		.then(user => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: 'user not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'issue getting user', err });
		});
});

// PUT update user
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const userInfo = req.body;

	Users.update(id, userInfo)
		.then(id => {
			res.status(200).json({ message: 'user updated', id: id });
		})
		.catch(err => {
			res.status(500).json({ error: 'issue updating user', err });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find user with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'issue deleting user', err });
		});
});

module.exports = router;

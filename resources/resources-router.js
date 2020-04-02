const express = require('express');
const Resources = require('./resources-model');

const router = express.Router();

// GET all resources
router.get('/', (req, res) => {
	Resources.findAll()
		.then(resources => {
			res.status(200).json(resources);
		})
		.catch(err => {
			res.status(500).json({ error: 'issue getting resources', err });
		});
});

// GET a resource
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Resources.findBy(id)
		.then(resource => {
			if (resource) {
				res.status(200).json(resource);
			} else {
				res.status(404).json({ message: 'resource not found' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'issue getting resource', err });
		});
});

router.post('/', (req, res) => {
	const resourceInfo = req.body;

	Resources.insert(resourceInfo)
		.then(id => {
			res.status(201).json({ message: 'resource created', id: id });
		})
		.catch(err => {
			res.status(500).json({ error: 'issue creating resource', err });
		});
});

// PUT update resource
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const resourceInfo = req.body;

	Resources.update(id, resourceInfo)
		.then(id => {
			res.status(200).json({ message: 'resource updated', id: id });
		})
		.catch(err => {
			res.status(500).json({ error: 'issue updating resource', err });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Resources.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: 'Could not find resource with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'issue deleting resource', err });
		});
});

module.exports = router;

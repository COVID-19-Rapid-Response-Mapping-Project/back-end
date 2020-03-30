exports.up = function(knex) {
	return knex.schema
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('name-of-org', 255).notNullable();
			tbl.string('type-of-org', 255).notNullable();
			tbl.string('state', 255).notNullable();
			tbl.string('state-region', 255);
			tbl.float('lat', 9, 6);
			tbl.float('lng', 9, 6);
			tbl.string('resource-type', 255).notNullable();
			tbl.text('description', 255);
			tbl.string('website-to-apply', 255).notNullable();
			tbl.string('website-to-support', 255);
			tbl.string('phone-number', 255);
		})
		.createTable('users', tbl => {
			tbl.increments();
			tbl
				.string('username', 255)
				.notNullable()
				.unique();
			tbl.string('password', 255).notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('resources');
};

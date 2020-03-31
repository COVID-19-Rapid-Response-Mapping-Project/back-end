exports.up = function(knex) {
	return knex.schema
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('org-name', 255).notNullable();
			tbl.string('relief-target', 255).notNullable();
			tbl.string('geographic-remit', 255).notNullable();
			tbl.string('website-to-apply', 255).notNullable();
			tbl.string('resource-type', 255).notNullable();
			tbl.string('type-of-org', 255).notNullable();
			tbl.string('address', 255);
			tbl.string('contact-info', 255);
			tbl.text('program-description', 255);
			tbl.string('website-to-donate', 255);
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

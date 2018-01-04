var keystone = require('keystone');
var Types = keystone.Field.Types;

var Reference = new keystone.List('Reference', {
	map: { name: 'name' },
	singular: 'Reference',
	plural: 'References',
	autokey: { path: 'slug', from: 'name', unique: true },
	defaultSort: '-category',
});

Reference.add({
	name: { type: String, required: true },
	website: { type: String },
	phone: { type: String },
	category: { type: String },
});

Reference.register();

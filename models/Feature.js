var keystone = require('keystone');
var Types = keystone.Field.Types;

var Feature = new keystone.List('Feature', {
	map: { name: 'title' },
	singular: 'Feature',
	plural: 'Features',
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-orderInPage',
});

Feature.add({
	title: { type: String, required: true },
	description: { type: String },
	image: { type: Types.CloudinaryImage },
	subtext: { type: String },
	publishedDate: { type: Date, default: Date.now },
	orderInPage: { type: Number },
});

Feature.register();

var keystone = require('keystone');
var Types = keystone.Field.Types;

var SliderItem = new keystone.List('SliderItem', {
	map: { name: 'title' },
	singular: 'SliderItem',
	plural: 'SliderItems',
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-orderInSlider',
});

SliderItem.add({
	title: { type: String, required: true },
	subtext: { type: String },
	productImage: { type: Types.CloudinaryImage },
	backgroundImage: { type: Types.CloudinaryImage },
	buttonText: { type: String },
	buttonLink: { type: String },
	orderInSlider: { type: Number },
});

SliderItem.register();

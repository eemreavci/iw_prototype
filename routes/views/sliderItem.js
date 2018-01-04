var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'sliderItem';

	// Load Headers
	view.query('sliderItem', keystone.list('SliderItem').model.find());

	// Render View
	view.render('sliderItem');
};

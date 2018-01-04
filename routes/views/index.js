var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load Features
	view.query('features', keystone.list('Feature').model.find(function (data) {
		locals.features = data;
	}));

	view.query('sliderItems', keystone.list('SliderItem').model.find(function (data) {
		locals.headers = data;
	}));

	// Render the view
	view.render('index');
};

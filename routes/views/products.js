var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'urunler';

	// Load Features
	view.query('products', keystone.list('Product').model.find(function (data) {
		locals.products = data;
	}));

	// Render the view
	view.render('urunler');
};

var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'referanslar';

	view.query('referencesPure', keystone.list('Reference').model.find(function (err, data) {
		if (err) {
			return;
		}
		var references = {};
		var categories = [];
		console.log('Data is:', data);
		// locals.references = data;
		// return;
		for (var i = 0; i < Object.keys(data).length; i++) {
			var reference = data[Object.keys(data)[i]];

			if (categories.indexOf(reference.category) === -1) {
				categories.push(reference.category);
			}
		}

		for (var i = 0; i < categories.length; i++) {
			references[categories[i]] = data.filter(item => item.category === categories[i]);
		}
		console.log('refereces', references);
		locals.categories = categories;
		locals.references = references;
	}));

	// Render View
	view.render('referanslar');
};

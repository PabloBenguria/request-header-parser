'use strict';

const router = require('./router/routes');

function init(app){
	
	router.init(app);

	app.listen(app.PORT, () => {
		console.log('Express listening on port: ' + app.PORT);
	});
};

module.exports = {
	init: init
};

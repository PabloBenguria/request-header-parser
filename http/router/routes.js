'use strict';

const ip = require('ip');
const platform = require('platform');

function init(app){
	app.get('/', (req, res) => {
		res.json({
			ipaddress: ip.address(),
			language: req.headers["accept-language"],
			software: platform.description
		});
	});
};

module.exports = {
	init: init
};



const { Key, By } = require('selenium-webdriver');

const GoogleAndideone = async (driver) => {
	await driver.get('https://google.com');

	const urlide = await driver.getCurrentUrl();
	console.log(urlide);

	return {
		urlide
	};
};

module.exports = {
	GoogleAndideone
};

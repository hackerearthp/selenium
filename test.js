require('chromedriver');
const assert = require('assert');
const chai = require('chai');
const { test } = require('mocha');
const expect = chai.expect;

const { Builder, Key, By, until, WebDriver } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('./chromedriver1eebc8c');
const firefox = require('selenium-webdriver/firefox');

const size = {
	width: 1180,
	height: 720
};

let driver;

before(async function() {
	driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(
			new chrome.Options()
				.addArguments('--headless')
				.addArguments('--no-sandbox')
				.addArguments('--disable-dev-shm-usage')
				.addArguments('--disable-notifications')
				.windowSize(size)
		)
		//  .setChromeService(service)
		.setFirefoxOptions(new firefox.Options().headless().windowSize(size))
		.build();
});

var indexFunctions = require('./index');

describe('Tests', function() {
	test('testing GoogleAndideone ', async () => {
		const result = await indexFunctions.GoogleAndideone(driver);
		console.log(result);
		expect(result.urlide).contain('google');
	});
});

after(() => driver && driver.quit());

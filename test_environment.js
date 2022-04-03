// my-custom-environment
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const config = require('./config');

class PuppeteerEnvironment extends NodeEnvironment {
	async setup() {
		await super.setup();
		try {
			const { browser, page } = await this.init();
			this.browser = browser;
			Object.assign(this.global, { browser, page });
		} catch (err) {
			console.error(err);
		}
	}

	async teardown() {
		// await this.browser.close();
	}

	async init() {
		let browser, pages, page;
		const isDebug = config.IS_DEBUG;
		let browserConfig = null;
		if (isDebug) {
			browserConfig = {
				headless: false,
				defaultViewport: null,
				slowMo: 30,
			};
			browser = await puppeteer.launch({
				...browserConfig,
				executablePath: process.env.CHROME_BIN || null,
				args: [
					'--no-sandbox',
					'--disable-gpu',
					'--disable-dev-shm-usage',
					'--start-maximized',
					'--disable-web-security',
					'--disable-features=IsolateOrigins',
					'--disable-site-isolation-trials',
				],
			});

			browser = await puppeteer.launch({
				product: 'firefox',
				headless: true,
				args: ["--no-sandbox"]
			 });
			 pages = await browser.pages();
			if (pages.length > 0) {
				page = pages[0];
			} else {
				page = await browser.newPage();
			}

			//await page.setViewport({ width: 1920, height: 1080 });
		} else {
			browserConfig = {
				headless: true,
				defaultViewport: null,
				slowMo: 30,
			};
			browser = await puppeteer.launch({
				...browserConfig,
				executablePath: process.env.CHROME_BIN || null,
				args: [
					'--no-sandbox',
					'--disable-gpu',
					'--disable-dev-shm-usage',
					'--start-maximized',
					'--disable-web-security',
					'--disable-features=IsolateOrigins',
					'--disable-site-isolation-trials',
				],
			});
			pages = await browser.pages();

			if (pages.length > 0) {
				page = pages[0];
			} else {
				page = await browser.newPage();
			}
			await page.setViewport({ width: 1920, height: 1080 });
		}
		return { browser, page };
	}
}

module.exports = PuppeteerEnvironment;

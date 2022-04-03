const expectPuppeteer = require('expect-puppeteer');
const puppeteer = require('puppeteer');

const selectors = {

};
module.exports = {
	 goto: async (url) => {
		await page.goto(url, { waitUntil: 'networkidle2', timeout: 100000 });
	// 	// await page.waitForSelector(selector);
	},
	
	select: async (name, value, type = 'value') => {
		const inputSelector = `.${name}-select:not([disabled="disabled"])`;
		const optionSelector = `.${name}-select-container.md-active md-option[${type}="${value}"]`;
		await page.waitForSelector(inputSelector);
		await expectPuppeteer(page).toClick(inputSelector);
		await page.waitForSelector(optionSelector);
		await expectPuppeteer(page).toClick(optionSelector);
	},
	delay: async (ms) => {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	},
	
	pageReload: async () => {
		await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });
	},
	successMessageHidden: async () => {
		await page.waitForSelector(selectors.success, { hidden: true });
	},
	autoScroll: async () => {
		await page.evaluate(async () => {
			await new Promise((resolve) => {
				var totalHeight = 0;
				var distance = 50;
				var timer = setInterval(() => {
					var scrollHeight = document.body.scrollHeight;
					window.scrollBy(0, distance);
					totalHeight += distance;

					if (totalHeight >= scrollHeight) {
						clearInterval(timer);
						resolve();
					}
				}, 50);
			});
		});
	},

	getInnerText: async (selector) => {
		await page.waitForSelector(selector);
		let innerText = await page.evaluate((sel) => document.querySelector(sel).innerText, selector);
		return innerText;
	},

	getCurrentUrl: async () => {
		const url = await page.url(); 
		return url;
	},

	getUrlOfNewOpenedPage: async () => {
	   const url = await newPage.evaluate(() => document.location.href);
       return url;
	},

	

};

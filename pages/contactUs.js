const expectPuppeteer = require('expect-puppeteer');
const actions = require('../utils/actions');

const selectors = {
    nametxt: '[id="cf-1"]',
    emailtxt: '[id="cf-2"]',
    mobileNumbertxt: '[id="cf-3"]',
    subjecttxt: '[id="cf-4"]',
    messagetxt: '[id="cf-5"]',
    submitBtn: 'input[type="submit"]',
    emailValidationtxt: '[class="wpcf7-not-valid-tip"]'
};
module.exports = {
	async fillContactusForm(name, email, mobileNumber, subject, message) {
		await expectPuppeteer(page).toFill(selectors.nametxt, name);
        await expectPuppeteer(page).toFill(selectors.emailtxt, email);
        await expectPuppeteer(page).toFill(selectors.mobileNumbertxt, mobileNumber);
        await expectPuppeteer(page).toFill(selectors.subjecttxt, subject);
        await expectPuppeteer(page).toFill(selectors.messagetxt, message);
        await expectPuppeteer(page).toClick(selectors.submitBtn)
	},
	getValidationTxt: async () => {
		const element = await page.waitForSelector(selectors.emailValidationtxt);
		const value = await element.evaluate((el) => el.textContent);
        return value;
	},
};

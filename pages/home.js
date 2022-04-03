const actions = require('../utils/actions');

const selectors = {
	contactBtn: 'button[class="contact-label"]',
	// companylnk: '//*[@id="menu-main-nav-1"]/li[1]/a',
	// carrerlnk: '//*[@id="menu-main-nav-1"]/li[5]/a'
};
module.exports = {
	async gotoConatctpage() {
        const [button] = await page.$x("//button[class='contact-label']");
        if (button) {
            await button.click();
        }
	},

	async gotoUsingHeader(indexlnk) {
		const headerSelection = `//*[@id="menu-main-nav-1"]/li[${indexlnk}]/a"]`;
		const option = await page.waitForXPath(headerSelection);
		await option.click();
	},
	
	
};

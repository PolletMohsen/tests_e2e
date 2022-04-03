const expectPuppeteer = require('expect-puppeteer');

const selectors = {
	joinUsbtn: 'span[data-alt="Check our open positions"]',
    locationddl: '[id="get_location"]',
    anywhereOption: 'option[value="Anywhere"]',
    qaAutomationJob: 'img[alt="Automation QA Engineer"]',
    
};
module.exports = {
        clickOnjoinUs: async () => {
            await page.waitForSelector(selectors.joinUsbtn);
            await expectPuppeteer(page).toClick(selectors.joinUsbtn);
        },

        selectAnyWherefromDropdown:async () => {
                const inputSelector = `.${name}-select:not([disabled="disabled"])`;
                const optionSelector = `.${name}-select-container.md-active md-option[${type}="${value}"]`;
                await page.waitForSelector(selectors.locationddl);
                await expectPuppeteer(page).toClick(selectors.locationddl);
                await page.waitForSelector(selectors.anywhereOption);
                await expectPuppeteer(page).toClick(selectors.anywhereOption);
        },

        goToQAJob: async () => {
            await page.waitForSelector(selectors.qaAutomationJob);
            await expectPuppeteer(page).toClick(selectors.qaAutomationJob);
        }
        
};

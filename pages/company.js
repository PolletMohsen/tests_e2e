const expectPuppeteer = require('expect-puppeteer');

const selectors = {
	leadershipdiv: 'div[class="cm-content"]',
    facebooklink: 'span[class="musala musala-icon-facebook"]'
};
module.exports = {
        validateLeadershipExistance: async () => {
            await page.waitForSelector(selectors.leadershipdiv);
            const innertext = await page.$eval(selectors.leadershipdiv, (el) => el.textContent);
            return innertext;
        },

        goToFacebookpage: async () => {
           await page.waitForSelector(selectors.facebooklink);
           await expectPuppeteer(page).toClick(selectors.facebooklink);
        }
};

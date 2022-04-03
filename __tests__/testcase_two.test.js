const actions = require('../utils/actions')
const homepage = require('../pages/home')
const companypage = require('../pages/company')

beforeEach(async () => {
	await homepage.gotoUsingHeader(1);
});

describe('#Company', () => {

	test('Should display correct Url while navigating to company page', async () => {
        const currentUrl = await actions.getCurrentUrl();
        expect(currentUrl).toEqual("https://www.musala.com/company/");
	});

    test('leadership section should be existing', async () => {
	    await actions.autoScroll();
        expect(await companypage.validateLeadershipExistance()).toContain('Leadership');
	});

    test('Should display correct Url while navigating to facebook company page', async () => {
	    await actions.autoScroll();
        await companypage.goToFacebookpage();
        const currentUrl = await actions.getUrlOfNewOpenedPage();
        expect(currentUrl).toEqual("https://www.facebook.com/MusalaSoft?fref=ts");
        expect(await page.$$eval('div[aria-label="Page profile photo"]', 
        imgs => imgs.map(img => img.getAttribute('href'))
        .includes('https://scontent.fcai15-1.fna.fbcdn.net/v/t1.6435-1/'))).toBe(true);
    
	});
});

const actions = require('../utils/actions')
const homepage = require('../pages/home')
const carrerpage = require('../pages/carrer')

beforeEach(async () => {
	await homepage.gotoUsingHeader(5);
});

describe('#Career', () => {

	test('Should display correct Url while navigating to carrer page', async () => {
        const currentUrl = await actions.getCurrentUrl();
        expect(currentUrl).toEqual("https://www.musala.com/careers/");
	});

    test('Should display correct Url while navigating to join us page', async () => {
	    await carrerpage.clickOnjoinUs();
        const currentUrl = await actions.getCurrentUrl();
        expect(currentUrl).toEqual("https://www.musala.com/careers/join-us/");
	});

    test('', async () => {
	    await carrerpage.clickOnjoinUs();
        await carrerpage.selectAnyWherefromDropdown();
        await carrerpage.goToQAJob();
        
    
	});
});

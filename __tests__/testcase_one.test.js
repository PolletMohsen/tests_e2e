const actions = require('../utils/actions')
const homepage = require('../pages/home')
const contactUspage = require('../pages/contactUs')
const data = require('../data')

describe('#ContactUs', () => {
	test.each(data.invlaidEmials)('An error message should be displayed incase of invalid email',() =>{
		await actions.autoScroll();
		await homepage.gotoConatctpage();
		await contactUspage.fillContactusForm('pollet','test@test','01222212777','test','test');
		await expect(contactUspage.getValidationTxt()).toEqual("The e-mail address entered is invalid.");
})
});

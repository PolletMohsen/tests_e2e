const actions = require('../utils/actions')
const config = require('../config')
beforeAll(async () => {
	await actions.goto(config.BASE_URL)
});

afterAll(async () => {

});

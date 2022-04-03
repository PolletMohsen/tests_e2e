module.exports = {
	rootDir: __dirname,
	testRegex: '.*[.]test[.]js',
	testEnvironment: '<rootDir>/test_environment.js',
	setupFilesAfterEnv: ['<rootDir>/setupfiles/expect-puppeteer-timeout.js', '<rootDir>/setupfiles/first-setup.js'],
	maxWorkers: 1,
	testTimeout: 600000, //setting jest timeout to 15 mins

	// runner: 'groups',
	reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]],
};

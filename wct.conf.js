module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: [
				'safari',
				'chrome', 'firefox'
			]
    },
    sauce: {
      disabled: true
    }
  },
  suites: [
		'test/px-action-sheet-test-fixture.html'
	]
};

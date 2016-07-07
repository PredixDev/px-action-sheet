// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('<px-action-sheet>', function () {
    var element = document.getElementById('px_action_sheet_1');

    test('renders', function () {
      assert.ok(element);
    });

    test('can toggle - open', function () {
      element.toggle();
      assert(element.opened === true);
    });

    test('can toggle - close', function () {
      element.toggle();
      assert(element.opened === false);
    });

    test('can toggle - isOpen', function () {
      var state = element.opened;
      element.opened = !state;
      assert(element.opened === true);
    });

    test('Dialog Mask can close action sheet.', function () {
      //element.isOpen = !element.isOpen;
      element.opened = true;
      element.$.overlay.click();
      assert(element.opened === false);
    });
  });
}

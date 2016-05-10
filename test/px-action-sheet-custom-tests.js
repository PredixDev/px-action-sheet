// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-action-sheet', function () {});
  suite('<px-action-sheet>', function () {
    var element = document.getElementById('px_action_sheet_1');

    test('renders', function () {
      assert.ok(element);
    });

    test('can toggle - open', function () {
      element.toggle();
      assert(element.open === true);
    });

    test('can toggle - close', function () {
      element.toggle();
      assert(element.open === false);
    });

    test('can toggle - isOpen', function () {
      var state = element.open;
      element.open = !state;
      assert(element.open === true);
    });

    test('Dialog Mask can close action sheet.', function () {
      //element.isOpen = !element.isOpen;
      element.open = true;
      element.$._actionDialogMask.click();
      assert(element.open === false);
    });
  });
};

const countHomeItems = require('./countHomeItems.js');

test('Counting Home Items', () => {
  expect(countHomeItems()).toBe(28);
});

const countComments = require('../modules/countComments.js');

const ul = document.createElement('ul');

describe('should count comments', () => {
  beforeEach(() => {
    const li = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
  });

  test('should return correct count', () => {
    const count = countComments(ul);
    expect(count).toBe(3);
  });

  test('should return 0 in the case of an empty container', () => {
    ul.innerHTML = '';
    const count = countComments(ul);
    expect(count).toBe(0);
  });

  test('should not count elements that are not a list item', () => {
    const p = document.createElement('p');
    ul.appendChild(p);
    const count = countComments(ul);
    expect(count).toBe(3);
  });
});
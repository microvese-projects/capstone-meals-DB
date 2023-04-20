const countHomeItems = require('../modules/countHomeItems.js');

const section = document.createElement('ul');

describe('Counting the number of items', () => {
  beforeEach(() => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const att1 = document.createAttribute('class');
    const att2 = document.createAttribute('class');
    const att3 = document.createAttribute('class');
    att1.value = 'item';
    att2.value = 'item';
    att3.value = 'item';
    div1.setAttributeNode(att1);
    div2.setAttributeNode(att2);
    div3.setAttributeNode(att3);

    section.appendChild(div1);
    section.appendChild(div2);
    section.appendChild(div3);
  });

  test('Number of items on a particular element', () => {
    const count = countHomeItems(section);
    expect(count).toBe(3);
  });

  test('On empty element, it should return 0', () => {
    section.innerHTML = '';
    const count = countHomeItems(section);
    expect(count).toBe(0);
  });

  test('should not count elements that have not a class "item"', () => {
    const div4 = document.createElement('div');
    const att4 = document.createAttribute('class');
    att4.value = 'item1';
    div4.setAttributeNode(att4);
    section.appendChild(div4);
    const count = countHomeItems(section);
    expect(count).toBe(3);
  });
});

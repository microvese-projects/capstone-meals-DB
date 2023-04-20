const countHomeItems = (where) => {
  const items = where.querySelectorAll('.item');
  return items.length;
};
module.exports = countHomeItems;

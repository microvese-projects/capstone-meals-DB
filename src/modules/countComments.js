const countComments = (container) => {
  const comments = container.querySelectorAll('li');
  const noOfComments = Array.from(comments).length;
  return noOfComments;
};

module.exports = countComments;
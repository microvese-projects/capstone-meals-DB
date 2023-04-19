import showComments from './showComments.js';

const postComment = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#name')
    .value
    .split(' ')
    .map((each) => each.split('').map((char, i) => {
      if (i === 0) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    }).join(''))
    .join(' ');
  const message = form.querySelector('#insights').value;
  const { id } = form.dataset;

  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: message,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    showComments(id);
  } catch (err) {
    throw new Error(err);
  }
  form.reset();
};

export default postComment;

/* eslint camelcase: ["error", {ignoreDestructuring: true}] */
const showComments = async (id) => {
  const commentsContainer = document.querySelector('#previous-comments');
  try {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/comments?item_id=${id}`);
    const comments = await res.json();
    commentsContainer.innerHTML = '';
    comments.forEach(({
      comment, creation_date, username,
    }) => {
      const li = document.createElement('li');
      li.textContent = `${(new Date(creation_date)).toLocaleDateString()} ${username}: ${comment}`;
      commentsContainer.appendChild(li);
    });
  } catch (err) {
    commentsContainer.textContent = 'Add a comment!';
    commentsContainer.style.color = 'grey';
  }
};

export default showComments;
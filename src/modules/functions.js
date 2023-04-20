import likeBtn from '../images/heart.svg';

export const addLike = async () => {
  const LikedArr = JSON.parse(localStorage.getItem('liked')) || [];

  document.querySelectorAll('.btn-likes').forEach((element) => {
    element.addEventListener('click', async () => {
      const liked = await element.dataset.liked;
      // adding like
      if (liked === 'true' || LikedArr.includes(element.dataset.btnLike)) {
        return;
      }
      const data = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/likes',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: element.dataset.btnLike,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const messageJson = await data.text();
      if (messageJson === 'Created') {
        const idFormat = `#d-${element.dataset.btnLike}`;
        const lDisplay = document.querySelector(idFormat);
        const totalLikes = parseInt(lDisplay.dataset.mealLikes, 10) + 1;
        lDisplay.innerHTML = `${totalLikes}Likes`;
        lDisplay.dataset.mealLikes = totalLikes;
      }
      element.dataset.liked = true;
      LikedArr.push(element.dataset.btnLike);
      localStorage.setItem('liked', JSON.stringify(LikedArr));
    });
  });
};

const likess = async () => {
  const data = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/likes',
    {
      method: 'GET',
      redirect: 'follow',
    },
  );
  const messageJson = await data.text();
  const message = await JSON.parse(messageJson);
  return message;
};

const countHomeItems = (where) => {
  const items = where.querySelectorAll('.item');
  return items.length;
};

export const items = async (where) => {
  const allLike = await likess();
  let innerHtml = '';
  const data = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    {
      method: 'GET',
      redirect: 'follow',
    },
  );
  const messageJson = await data.text();
  const message = await JSON.parse(messageJson);
  message.meals.forEach((element) => {
    const { strMeal, strMealThumb, idMeal } = element;
    const like = allLike.filter((lik) => lik.item_id === idMeal);
    let tLike = 0;
    if (like[0] !== undefined) {
      tLike = like[0].likes;
    }
    innerHtml += `<div class ="item">
    <img class="images" data-meal-id="${idMeal}" src="${strMealThumb}" />
        <div class="details">
            <h3>${strMeal}</h3>
            <div class="likes">
                <img class="btn-likes" data-btn-like="${idMeal}" data-liked="false" src="${likeBtn}">
                <p class="d-likes" data-meal-likes="${tLike}" id="d-${idMeal}">${tLike}Likes</p>
            </div>
        </div>
        <button class="comments">Comments</button>
    </div>`;
  });

  where.innerHTML = innerHtml;
  document.querySelector('#meals-count').innerHTML = countHomeItems(where);
  await addLike();
};

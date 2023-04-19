const popup = document.querySelector('#popup');

const displayMealData = ({
  idMeal, strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb,
}) => {
  const instructions = strInstructions.split('\r\n')
    .filter((each) => each !== '');

  const data = `
        <div id="close-popup">X</div>
        <img src=${strMealThumb} alt=${strMeal}>
        <h3 id="meal-name">${strMeal}</h3>
        <div id="data">
          <p><span class="bold">Id:</span> ${idMeal}</p>
          <p><span class="bold">Category:</span> ${strCategory}</p>
          <p><span class="bold">Origin:</span> ${strArea}</p>
          <p><span class="bold">Youtube:</span> <a href=${strYoutube}>Link</a></p>
        </div>
        <div id="preparation-instructions">
          <div>
            ${instructions.map((instruction) => `<p>${instruction}</p>`)}
          </div>
        </div>
        <div>
          <h3>Comments (<span id="comments-count">2</span>)</h3>
          <ul id="previous-comments">
            <li>01/02/2023 Ben: I love the meal!</li>
            <li>01/02/2023 Rushema: I love the meal!</li>
          </ul>
        </div>
        <form>
          <h3 id="form-heading">Add a comment</h3>
          <label for="name">Your name</label>
          <input type="text" id="name" minlength="3" placeholder="Your name" required> 
          <label for="insights">Your Insights</label>
          <textarea id="insights" minlength="3" placeholder="Your insights" minlength="3" required></textarea>
          <button type="Submit">Comment</button>
        </form>
  `;
  popup.innerHTML = data;
};

export default displayMealData;
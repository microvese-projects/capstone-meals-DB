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
  `;
  popup.innerHTML = data;
};

export default displayMealData;
import displayMealData from './displayMealData.js';

const callApi = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await res.json();
  const { meals } = json;
  const meal = meals[0];
  displayMealData(meal);
};

export default callApi;
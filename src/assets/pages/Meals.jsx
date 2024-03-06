import { useEffect, useState } from 'react';
import { availableMeals } from '../../../data/available-meals';

function Meals() {
  useEffect(() => {
    async function fetchMeals() {
      // const response = await fetch();
      const response = availableMeals;
      if (!response.ok) {
      }

      // const meals = await response.json();
      const meals = response;
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  const [loadedMeals, setLoadedMeals] = useState();

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;

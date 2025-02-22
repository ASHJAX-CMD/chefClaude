import React, { useEffect, useState } from 'react';
import { getRecipeFromMistral } from '../../../api';
import { response } from 'express';

const Recipe = (props) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setError(null);
        const response = await getRecipeFromMistral(props.Ingredients);
        setRecipe(response);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError("Failed to fetch recipe. Try again."); 
      }
    };

    if (Array.isArray(props.Ingredients) && props.Ingredients.length > 3) {
      fetchRecipe();
    }
  }, [props.Ingredients]);

  return (
    <div>
      
      JUST A CHECK
      <section>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p> // ✅ Show only real errors
        ) : recipe ? (
          <article className="suggested-recipe-container" aria-live="polite">
            <h2>Chef's Recommendation:</h2>
            <h3>{recipe.name}</h3>
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <strong>Instructions:</strong>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </article>
        ) : (
          null
        )}
      </section>
    </div>
  );
};

export default Recipe;

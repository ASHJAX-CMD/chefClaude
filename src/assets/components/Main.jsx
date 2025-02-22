import React from "react"
import Ingredients from "./Ingredients"
import Recipe from "./Recipe"

export default function Main() {
    
   

   
    
    const [ingredients, setIngredients] = React.useState(
        ["pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <Ingredients IndiCount = {ingredients.length} IndiListItems={ingredientsListItems} FunctForBtn={toggleRecipeShown} />

            {recipeShown?<Recipe RecipeShown={recipeShown} Ingredients={ingredients} />:null}
         
          
        </main>
    )
}
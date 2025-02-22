import React from 'react'

const Ingredients = (props) => {
  return (
    <div>
      {props.IndiCount > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.IndiListItems}</ul>
                {props.IndiCount> 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.FunctForBtn}>Get a recipe</button>
                </div>}
            </section>}
    </div>
  )
}

export default Ingredients

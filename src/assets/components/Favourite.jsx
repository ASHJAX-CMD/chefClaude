import React from 'react'



const Favourite = (props) => {
   
  return (
    <div>
      <button

onClick={props.toogle}
aria-pressed={props.contactisFavorite}
aria-label={props.label}
className="favorite-button"
>
<img
    
    alt={props.contactisFavorite ? "filled star icon" : "empty star icon"}
    src= {props.image
      
    }
    className="favorite"
/>
</button>
    </div>
  )
}

export default Favourite

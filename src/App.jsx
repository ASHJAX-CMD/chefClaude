import React from "react"
import profile from "../src/assets/images/profile.jpg"
import starFilled from "../src/assets/images/starFilled.png"
import starEmpty from "../src/assets/images/starEmpty.png"
import Favourite from "./assets/components/Favourite"

export default function App() {
  
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    return (
        <main>
          
            <article className="card">
                <img
                    src={profile}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Favourite toogle={toggleFavorite} image={starIcon} contactisFavorite={contact.isFavorite} label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

import React from "react";
import Thor from '../images/Thor.jpg'

function Card () {
    return (
        <div>
            <div>
             <img src={Thor} alt="thor" />
             <h2>Thor: God of Thunder</h2>
             <h2>Rating</h2>
             <p>7</p>
             <h2>Description</h2>
             <p>Witness the mighty Thor, the Norse God of Thunder, as he embarks on an epic journey to 
                protect the Nine Realms from ancient forces of darkness. Joined by his loyal companions and 
                armed with his enchanted hammer, Mjölnir, Thor must confront his own past and face formidable 
                enemies to ensure the survival of his people and the universe itself.</p>
            </div>
        </div>
    )
}

export default Card;
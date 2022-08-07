import React, {useState} from "react";

function ListingCard({card, onDelete}) {
  const [favorite, setFavourite]= useState(false)
  const {description, image, location}= card;

  function handleFavourite(){
    setFavourite(!favorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE"
    })   
    .then(res=> res.json())
    .then(() => onDelete(card))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick = {handleFavourite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFavourite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick= {handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

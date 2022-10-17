import React, {useState} from "react";

function ListingCard({product, handleDelete}) {
  const [favStatus, setFavStatus] = useState(false)

  function handleClick(){
    setFavStatus(!favStatus)
  }

  function onDeleteClick(){
    handleDelete(product)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={product.image} alt={product.description} />
      </div>
      <div className="details">
        {favStatus ? (
          <button onClick= {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{product.description}</strong>
        <span> · {product.location}</span>
        <button onClick= {onDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

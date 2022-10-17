import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({products, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {products.map((product)=> <ListingCard handleDelete = {handleDelete} key = {product.id} product = {product}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

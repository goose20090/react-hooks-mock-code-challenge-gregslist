import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchValue}) {

  const [cards, setCards] = useState([])
  const [reference, setReference]= useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(data => setCards(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(data => setReference(data))
  }, [])


  useEffect(()=>{
    let newArr = [...reference].filter((card)=> card.description.toLowerCase().includes(searchValue.toLowerCase()))
    console.log(newArr)
    setCards(newArr)
  }, [searchValue])


  
  function handleDelete(card){
    let newArr = cards.filter((existingCard)=> card.id !== existingCard.id)
    setCards(newArr)
  }
  
  return (
    <main>
      <ul className="cards">
        {cards.map((card)=> <ListingCard key = {card.id} card = {card} onDelete = {handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

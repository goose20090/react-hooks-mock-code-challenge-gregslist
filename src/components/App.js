import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

function App() {

  const initialState = {
    description: "",
    image: "",
    location: ""
  }

  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState("")
  const [postFormData, setPostFormData] = useState(initialState)


  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then((data)=> {
      setProducts(data);
      setAllProducts(data);
    })
}
  , [])

  function handleDelete(product){
    fetch(`http://localhost:6001/listings/${product.id}`, {
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(data=> console.log(data))

    let newArr = [...products].filter((filteredProduct)=> filteredProduct.id !== product.id)
    setProducts(newArr)
  }

  function handleFormChange(e){
    let inputValue = e.target.value
    setFormData(inputValue)

    let newArr = allProducts.filter((product)=> searchTester(product, inputValue))
    console.log(newArr)
    setProducts(newArr)

  }

  function searchTester(product, string){

    // split name of property value that's being searched against

    let prodDesStringArr = product.description.split("")

    // rejoin portion that matches character length of string

    let desArrPortion = prodDesStringArr.slice(0, (string.length)).join("")

    // test portion against string

    if (string === desArrPortion){
      return true
    }

    else{
      return false
    }

  }

  function alphebatiseProducts(alphStatus){
    if(alphStatus){
    let newArr = [...products].sort(compareDescription)
    setProducts(newArr)}
    else{
      setProducts(allProducts)
    }
  }

  function compareDescription(a, b) {
    const nameA = a.description.toUpperCase();
    const nameB = b.description.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  function handlePostFormChange(e){

    setPostFormData({
      ...postFormData,
      [e.target.name]: `${e.target.value}`
    })
    console.log(postFormData)

  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postFormData)
    })
    .then(res=> res.json())
    .then((product)=>setProducts([...products, product]))
  }
  
  return (
    <div className="app">
      <Header formData = {formData} handleFormChange= {handleFormChange} alphebatiseProducts= {alphebatiseProducts}/>
      <Form handleSubmit = {handleSubmit} postFormData = {postFormData} handlePostFormChange= {handlePostFormChange}/>
      <ListingsContainer handleDelete = {handleDelete} products= {products} />
    </div>
  );
}

export default App;

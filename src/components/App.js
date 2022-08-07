import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[searchValue, setSearchValue] = useState("")

  function handleSearch(search){
    setSearchValue(search)
  }
  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer searchValue = {searchValue}/>
    </div>
  );
}

export default App;

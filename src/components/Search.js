import React, {useState} from "react";

function Search({formData, handleFormChange, alphebatiseProducts}) {

  const [alphStatus, setAlphStatus] = useState(true)
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function onChange(e){
    handleFormChange(e)
  }

  function handleClick(e){
    setAlphStatus(!alphStatus)
    alphebatiseProducts(alphStatus)
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={formData}
          onChange={onChange}
        />
        <button type="submit">🔍</button>
      </form>
      <button onClick={handleClick}>{alphStatus? "Alphebatise": "DeAlphabetise"}</button>
    </>
  );
}

export default Search;

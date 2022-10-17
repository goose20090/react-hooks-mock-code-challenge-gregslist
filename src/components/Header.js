import React from "react";
import Search from "./Search";

function Header({formData, handleFormChange, alphebatiseProducts}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search alphebatiseProducts = {alphebatiseProducts}formData = {formData} handleFormChange = {handleFormChange}/>
    </header>
  );
}

export default Header;

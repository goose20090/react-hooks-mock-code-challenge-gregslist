import React from "react";

function Form({postFormData, handlePostFormChange, handleSubmit}){

    function onChange(e){
        handlePostFormChange(e)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Description:</label>
            <input onChange = {onChange} value = {postFormData.name} name = "description"></input>
            <label>Image URL:</label>
            <input onChange = {onChange} value = {postFormData.image} name= "image"></input>
            <label>Location:</label>
            <input onChange = {onChange} value = {postFormData.location} name= "location"></input>
            <button type="submit">Submit</button>
        </form>
    )

}

export default Form;
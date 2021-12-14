import React from "react";
import "./search.css";

export const search = ({handleChange})=>(
   
    <input className="search"
   type='search'
   placeholder="kya h!!"
   onChange={handleChange}></input>
   

)
export default search;
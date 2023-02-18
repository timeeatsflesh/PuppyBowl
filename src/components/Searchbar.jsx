import React, { useState } from "react";


const [searchInput, setSearchInput] = useState("");
const [searchResults, setSearchResults] = useState([]);


<input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />


const fetchSearchResults = async () => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players=${searchInput}`);
    const data = await response.json();
    setSearchResults(data);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchResults();
  };
  
  <form onSubmit={handleSubmit}>
    <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
    <button type="submit">Search</button>
  </form>
  

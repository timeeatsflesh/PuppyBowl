import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetAllPuppiesWithFetch } from "./";

const PuppySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [puppies, setPuppies] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const allPuppies = await GetAllPuppiesWithFetch();
    const filteredPuppies = allPuppies.filter((puppy) =>
      puppy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPuppies(filteredPuppies);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      {puppies.map((puppy) => (
        <div key={puppy.id}>
          <Link to={`/puppies/${puppy.id}`}>
            <h3>{puppy.name}</h3>
          </Link>
          <p>{puppy.breed}</p>
        </div>
      ))}
    </div>
  );
};

export default PuppySearch;

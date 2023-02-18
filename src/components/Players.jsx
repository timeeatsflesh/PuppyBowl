import React, {useState, useEffect} from "react";
import GetAllPuppiesWithFetch from "../ApiAdapter";
import { Link } from "react-router-dom";

const Players = (props) => {  
  const [allThePuppies, setAllPuppies] = useState([]);
    
  async function getAllPuppies() {
      try {
          const data = await GetAllPuppiesWithFetch();
          setAllPuppies(data)
      } catch (error) {
          console.log(error)
      }
  } 
  
  useEffect(() => {
      getAllPuppies();
  },[])

  
console.log(allThePuppies)
  return (
    <div>
      {allThePuppies.map((puppy, idx) => {
        return (
          <div className="puppy-card" key={`Puppy ${idx}`}>
            <h1>{puppy.name}</h1>
            <h1>#{puppy.id}</h1>
            <img src={puppy.imageUrl} alt="PuppyPicture" />
            <Link to ={`player/${puppy.id}`} >See Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Players;

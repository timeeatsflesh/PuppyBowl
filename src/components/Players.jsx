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
    
    <div id="allCards">
      {allThePuppies.map((puppy, idx) => {
        return (
          <div className="puppyCard" key={`Puppy ${idx}`}>
            <div id="puppyInfo">
            <h1 id="name">{puppy.name} </h1>
            <h1 id="id">#{puppy.id}</h1>
            </div>
            <img src={puppy.imageUrl} alt="PuppyPicture" />
            <Link id="seeDetails" to ={`player/${puppy.id}`} >See Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Players;

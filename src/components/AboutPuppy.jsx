import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { GetPuppyWithFetch } from "../ApiAdapter";

const AboutPuppy = () =>{
    const [thePuppy, setThePuppy] = useState({});
    let { id } = useParams();
    
  async function getPuppy() {
      try {
          const data = await GetPuppyWithFetch(id);
          setThePuppy(data)
      } catch (error) {
          console.log(error)
      }
  } 
  
  useEffect(() => {
      getPuppy(id);
  },[id])
console.log(getPuppy)

return (
    <div id="puppyPage">
         <img id="profilePic" src={thePuppy !==undefined ? thePuppy.imageUrl:null}/>
         <div id="puppyDetails">
         <h1 className="details" >Name: {thePuppy !==undefined ? thePuppy.name:null}</h1>
         <h1 className="details">Breed: {thePuppy !==undefined ? thePuppy.breed:null}</h1>
         <h1 className="details">Status: {thePuppy !==undefined ? thePuppy.status:null}</h1>
         <h1 className="details">CohortID: #{thePuppy !==undefined ? thePuppy.cohortId:null}</h1>
         <h1 className="details">TeamID: #{thePuppy !==undefined ? thePuppy.teamId:null}</h1>
         <h1 className="details">ID: #{thePuppy !==undefined ? thePuppy.id:null}</h1>
        <Link id="goBackToPlayers" to ={`/`}>Go Back To Players</Link>
         </div>
        </div>
        )
    }
    
    export default AboutPuppy
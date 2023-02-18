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
    <div>
         <h1>Name: {thePuppy !==undefined ? thePuppy.name:null}</h1>
         <h1>Breed: {thePuppy !==undefined ? thePuppy.breed:null}</h1>
         <h1>Status: {thePuppy !==undefined ? thePuppy.status:null}</h1>
         <h1>CohortID: #{thePuppy !==undefined ? thePuppy.cohortId:null}</h1>
         <h1>TeamID: #{thePuppy !==undefined ? thePuppy.teamId:null}</h1>
         <h1>ID: #{thePuppy !==undefined ? thePuppy.id:null}</h1>
         <img src={thePuppy !==undefined ? thePuppy.imageUrl:null}/>
         <Link to ={`/`}>Go Back</Link>
        </div>
        )
    }
    
export default AboutPuppy
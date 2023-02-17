import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import GetAllPuppiesWithFetch from "../ApiAdapter";

const AboutPuppy = () =>{
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

let { id } = useParams();

    return (
        <div>
        {allThePuppies.map((puppy, idx) => {
          return (
            <div className="puppy" key={`Puppy ${idx}`}>
                { id ? <h1>{puppy.id}</h1> : <h1></h1> }
            
                <Link to ={`/`}>Go Back</Link>
             
            </div>
          );
        })}
      </div>
        )
    }
    
export default AboutPuppy
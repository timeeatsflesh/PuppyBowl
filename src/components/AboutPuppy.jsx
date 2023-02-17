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
         {thePuppy !==undefined ? thePuppy.name:null}
        </div>
    //     <div>
    //     {thePuppy.map((puppy, idx) => {
    //       return (
    //         <div className="puppy" key={`Puppy ${idx}`}>
    //             { id ? <h1>{puppy.id}</h1> : <h1></h1> }
            
                // <Link to ={`/`}>Go Back</Link>
             
    //         </div>
    //       );
    //     })}
    //   </div>
        )
    }
    
export default AboutPuppy
import React, { useEffect, useState } from "react";
import { Navbar } from "./";
import { Players } from "./";
import {GetAllPuppiesWithFetch} from "./"

const Main = () => {
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
    return(
        <div id="main">
            <Navbar />
            <Players allThePuppies={allThePuppies}/>
            
        </div>
    )
}
















export default Main
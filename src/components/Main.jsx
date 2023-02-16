import React, { useEffect, useState } from "react";
import { Navbar } from "./";
import {GetAllpuppiesWithfetch} from "./"

const Main = () => {
    const [AllThePuppies, setAllPuppies] = useState([]);
    
    async function getAllPuppies() {
        try {
            const data = await GetAllpuppiesWithfetch();
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
            
        </div>
    )
}
















export default Main
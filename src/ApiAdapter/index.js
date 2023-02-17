import React from "react";

const BASE = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players";
const GetAllPuppiesWithFetch = async () => {
    try {
        const response = await fetch(`${BASE}`)
        const data = await response.json();
        const puppies = data.data.players
        return puppies
        
    } catch (error) {
        console.log(error)
    }
}

export default GetAllPuppiesWithFetch
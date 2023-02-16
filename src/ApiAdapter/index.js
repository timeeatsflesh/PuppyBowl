import React from "react";

const BASE = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players";
const GetAllpuppiesWithfetch = async () => {
    try {
        const response = await fetch(`${BASE}`)
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
export default GetAllpuppiesWithfetch
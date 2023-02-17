import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./";
import { Players } from "./";
import {GetAllPuppiesWithFetch} from "./"

const Main = () => {
    
    return(
        <div id="main">
            <Navbar />
            <Outlet />
        </div>
    )
}
















export default Main
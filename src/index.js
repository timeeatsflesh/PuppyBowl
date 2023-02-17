import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AboutPuppy, Players } from "./components";
import { createBrowserRouter, RouterProvider, Route, Routes, createRoutesFromElements,} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
       
        <Route path="/" element={<Main/>}>
            <Route path="/" element={<Players/>}/>
            <Route path="player/:id" element={<AboutPuppy />} />
        </Route>
    
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);


root.render(<RouterProvider router={router}/>);

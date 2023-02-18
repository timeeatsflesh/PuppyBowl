import React from "react";
import { Link } from "react-router-dom";
// import PuppySearch from "./PuppySearch";

const Navbar = () => {
  return (
    <nav>
      <Link id="homeButton" to="/">Home</Link>
      {/* <PuppySearch /> */}
    </nav>
  );
};

export default Navbar;

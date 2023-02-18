import React from "react";
import { Link } from "react-router-dom";
import PuppySearch from "./PuppySearch";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <PuppySearch />
    </nav>
  );
};

export default Navbar;

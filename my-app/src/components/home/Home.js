import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="homeBackground">
      <div>
        <NavLink className="homeEasy" to="/easy">
          Easy
        </NavLink>
      </div>
      <div>
        <NavLink className="homeHard" to="/hard">
          Hard
        </NavLink>
      </div>
    </div>
  );
};

export default Home;

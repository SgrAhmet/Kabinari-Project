import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link className="link" to="/settings">
        Settings
      </Link>

      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
    </div>
  );
};

export default Home;

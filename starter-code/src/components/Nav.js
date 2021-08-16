import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/buzzwords">Buzzword</Link>
        </li>

        <li>
          <Link to="/nats">Nats</Link>
        </li>

        {/* <li>
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default nav;

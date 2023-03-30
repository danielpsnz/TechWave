import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/category/technology">Technology</Link>
        </li>
        <li>
          <Link to="/category/science">Science</Link>
        </li>
        <li>
          <Link to="/category/gadgets">Gadgets</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import CSS file for styling
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";


const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/regApp" className="nav-item"><FaHome /></Link>
      <Link to="" className="nav-item"><FaBriefcaseMedical /></Link>
      <Link to="" className="nav-item"><FaTasks/></Link>
      <Link to="/" className="nav-item"><CgProfile /></Link>
      
    </nav>
  );
}

export default Nav;

import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { AuthContext } from "../Context/auth";



const Nav = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
    { user && <nav className="fixed bottom-0 w-full bg-gray-800 p-4 flex justify-around md:justify-center md:space-x-8 text-white">
      <Link to="/regApp" className="nav-item text-2xl md:text-xl hover:text-blue-400"><FaHome /></Link>
      <Link to="#" className="nav-item text-2xl md:text-xl hover:text-blue-400"><FaBriefcaseMedical /></Link>
      <Link to="#" className="nav-item text-2xl md:text-xl hover:text-blue-400"><FaTasks /></Link>
      <Link to="/" className="nav-item text-2xl md:text-xl hover:text-blue-400"><CgProfile /></Link>
    </nav>}
    </>
  );
}

export default Nav;

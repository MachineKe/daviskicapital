import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "./Context/auth";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import Login from './Login';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [pageLoaded, setPageLoaded] = useState(false); 

  useEffect(() => {
    setPageLoaded(true); 
    if (pageLoaded) {
      handleReload(); 
    }
  }, [user]);

  const handleLogout = () => {
    logout();
  };

  const handleReload = () => {
    window.location.reload(); 
  };

  return (
    <>
      {user ? (
        <div className="container flex flex-col items-center justify-center">
          {/* Align these paragraphs in the center */}
          <p className="text-center">Full Name: {user.fullname}</p>
          <p className="text-center">Username: {user.username}</p>
          {/* <p className="text-center">Phone: {user.phone}</p> */}
          <p className="text-center">Email: {user.email}</p>

          <p className="text-center">Sex: {user.gender}</p>
          <p className="text-center">Age: {user.age}</p>
          <Link to="" className="link" onClick={handleLogout}>
            <div className="flex items-center space-x-2 mt-4">
              <MdOutlineExitToApp />
              <p className="nameLogo">Logout</p>
            </div>
          </Link>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;

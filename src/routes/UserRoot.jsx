import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const UserRoot = () => {
  const navigate = useNavigate();

  const logOutHandler =() => {
    navigate('/')
  }

  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            {/* <a href="">edit</a> */}
            <Link to="edit">edit</Link>
          </li>
          <li>
            {/* <a href="">edit</a> */}
            <Link to="info">info</Link>
          </li>
          {/* <li> */}
            {/* <a href="">logout</a> */}
            {/* <Link to="/">logout</Link> */}
          {/* </li> */}
          <li onClick={logOutHandler}>logout</li>
        </ul>
      </div>
      <div className="content"> <Outlet /> </div>
    </div>
  );
};

export default UserRoot;

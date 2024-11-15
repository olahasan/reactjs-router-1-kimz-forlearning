import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="wrapper">
       <Header />
      <div className="main"><Outlet/></div>
       <Footer />
    </div>
  );
};

export default Root;
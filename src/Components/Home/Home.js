import React from "react";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Propertylist from "../PropertyList/Propertylist";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist />
      </div>
    </div>
  );
};

export default Home;

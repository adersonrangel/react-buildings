import React from "react";
import logo from "./logo.svg";
import Banner from "./Banner";
import Card from "./Card";
import "./styles/styles.sass";

function App() {
  return (
    <>
      <Banner />
      <div className="ed-grid m-grid-3">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;

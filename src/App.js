import React from "react";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import Population from "./Components/Population.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>NYC Demographics Dashboard</h1>

      <div className="visCard">
        <Population />
      </div>

      <Footer />
    </div>
  );
}

export default App;

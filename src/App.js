import React from "react";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import Population from "./Components/Population.js";
import PopulationByBorough from "./Components/PopulationByBorough.js";
import NineTeenFifty from "./Components/NineTeenFifty";
import NineTeenSixty from "./Components/NineTeenSixty";
import NineTeenSeventy from "./Components/NineTeenSeventy";

import "./App.css";
import { VictoryBar } from "victory";

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>NYC Demographics Dashboard</h1>

      <div className="visCard">
        <Population />
      </div>
      <div className="visCard">
        <PopulationByBorough />
      </div>
      <div className="visCard">
        <NineTeenFifty />
      </div>
      <div className="visCard">
        <NineTeenSixty />
      </div>
      <div className="visCard">
        <NineTeenSeventy />
      </div>

      <Footer />
    </div>
  );
}

export default App;

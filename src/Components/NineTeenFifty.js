import React from "react";
import { VictoryPie } from "victory";
import data from "../Data/HistoricalPopulationByYear";

const data1950 = data[0];
console.log(data1950);

function NineTeenFifty() {
  return (
    <div>
      <h1>1950 population</h1>
      <VictoryPie
        colorScale="cool"
        data={[
          { x: data1950.data[0].borough, y: data1950.data[0].population },
          { x: data1950.data[1].borough, y: data1950.data[1].population },
          { x: data1950.data[2].borough, y: data1950.data[2].population },
          { x: data1950.data[3].borough, y: data1950.data[3].population },
          { x: data1950.data[4].borough, y: data1950.data[4].population }
        ]}
      />
    </div>
  );
}

export default NineTeenFifty;

import React from "react";
import { VictoryPie } from "victory";
import data from "../Data/HistoricalPopulationByYear";

const data1960 = data[1];
console.log(data1960);

function NineTeenSixty() {
  return (
    <div>
      <h1>1960 population</h1>
      <VictoryPie
        colorScale="cool"
        data={[
          { x: data1960.data[0].borough, y: data1960.data[0].population },
          { x: data1960.data[1].borough, y: data1960.data[1].population },
          { x: data1960.data[2].borough, y: data1960.data[2].population },
          { x: data1960.data[3].borough, y: data1960.data[3].population },
          { x: data1960.data[4].borough, y: data1960.data[4].population }
        ]}
      />
    </div>
  );
}

export default NineTeenSixty;

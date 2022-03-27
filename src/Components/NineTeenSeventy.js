import React from "react";
import { VictoryPie } from "victory";
import data from "../Data/HistoricalPopulationByYear";

const data1970 = data[2];

function NineTeenSeventy() {
  return (
    <div>
      <h1>1970 population</h1>
      <VictoryPie
        colorScale="cool"
        innerRadius={75}
        data={[
          { x: data1970.data[0].borough, y: data1970.data[0].population },
          { x: data1970.data[1].borough, y: data1970.data[1].population },
          { x: data1970.data[2].borough, y: data1970.data[2].population },
          { x: data1970.data[3].borough, y: data1970.data[3].population },
          { x: data1970.data[4].borough, y: data1970.data[4].population }
        ]}
      />
    </div>
  );
}

export default NineTeenSeventy;

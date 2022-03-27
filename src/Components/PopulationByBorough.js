import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLegend
} from "victory";
import {
  bronx,
  brooklyn,
  manhattan,
  queens,
  statenisland
} from "../Data/PopulationByBorough";

function PopulationByBorough() {
  return (
    <div>
      <h1>Population By Year By Borough</h1>
      <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={[1950, 2000, 2050]} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000000} mil`} />
        <VictoryLegend
          x={0}
          y={0}
          title="Key"
          centerTitle
          orientation="horizontal"
          gutter={15}
          style={{ border: { stroke: "black" }, title: { fontSize: 15 } }}
          colorScale="cool"
          data={[
            { name: "Bronx" },
            { name: "Brooklyn" },
            { name: "Manhattan" },
            { name: "Queens" },
            { name: "SI" }
          ]}
        />
        <VictoryStack colorScale="cool">
          <VictoryBar data={bronx} x="year" y="population" />
          <VictoryBar data={brooklyn} x="year" y="population" />
          <VictoryBar data={manhattan} x="year" y="population" />
          <VictoryBar data={queens} x="year" y="population" />
          <VictoryBar data={statenisland} x="year" y="population" />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
}

export default PopulationByBorough;

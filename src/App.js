import React from 'react'
import './App.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries,
  RadialChart,
  CircularGridLines,
  MarkSeries,
} from "react-vis";


function App() {
  const data = [
    { angle: 1, radius: 10 },
    {
      angle: 2,
      label: "Super Custom label",
      subLabel: "With annotation",
      radius: 20,
    },
    { angle: 5, radius: 5, label: "Alt Label" },
    { angle: 3, opacity: 0.5, radius: 14 },
    {
      angle: 5,
      radius: 12,
      subLabel: "Sub Label only",
      className: "custom-class",
    },
  ];
  return (
    <div className="App">
      {/* <RadialChart data={myData} width={300} height={300} /> */}
      <XYPlot
        margin={10}
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={100}
        height={100}
      >
        <CircularGridLines />
        <XAxis top={(100 - 10) / 2} />
        <YAxis left={5/ 2} />
        <MarkSeries
          strokeWidth={2}
          sizeRange={[5, 15]}
          data={data.map((row) => ({
            ...row,
            x: Math.cos(row.theta) * row.r,
            y: Math.sin(row.theta) * row.r,
          }))}
        />
      </XYPlot>

{/*         
        <VerticalGridLines top={1000} />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 10 },
            { x: "Bananas", y: 5 },
            { x: "Cranberries", y: 15 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 12 },
            { x: "Bananas", y: 2 },
            { x: "Cranberries", y: 11 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 11 },
            { x: "Bananas", y: 2 },
            { x: "Cranberries", y: 14 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 10 },
            { x: "Bananas", y: 5 },
            { x: "Cranberries", y: 15 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 12 },
            { x: "Bananas", y: 2 },
            { x: "Cranberries", y: 11 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Apples", y: 11 },
            { x: "Bananas", y: 2 },
            { x: "Cranberries", y: 14 },
          ]}
        />
      </XYPlot> */}
    </div>
  );
}

export default App;

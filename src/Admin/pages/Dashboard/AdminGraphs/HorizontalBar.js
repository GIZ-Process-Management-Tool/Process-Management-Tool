import React from "react";
import { HorizontalBar } from "react-chartjs-2"; //import Horizontal Bar module from react-chart-js-2

const mydata = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

export default function HorizontalBar1() {
  return (
    <div>
      <h2>Horizontal Bar Example (custom size)</h2>
      <HorizontalBar
        data={mydata}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}


import React from "react";
import { HorizontalBar } from "react-chartjs-2"; //import Horizontal Bar module from react-chart-js-2

const mydata = {
  labels: ["Shift1", "Shift2"],
  datasets: [
    {
      data: [200, 150, 100],
      backgroundColor: ["#BB8FCE", "#665191", "#FFCE56"],
      hoverBackgroundColor: ["#A569BD", "#624e8c", "#FFCE56"],
    },
  ],
};

export default function HorizontalBar1() {
  return (
    <div>
      <h2>Shift wise production for yesterday</h2>
      <HorizontalBar
        data={mydata}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

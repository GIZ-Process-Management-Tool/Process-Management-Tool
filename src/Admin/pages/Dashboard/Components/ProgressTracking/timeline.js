import React from "react";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

export default function Timeline() {
  const items = [
    {
      i: 1,
      name: "Step 1",
      active: true,
    },
    {
      i: 2,
      name: "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH",
      active: true,
    },
    {
      i: 3,
      name: "Step 3",
      active: true,
    },
    {
      i: 4,
      name: "Step 4",
      active: false,
    },
    {
      i: 5,
      name: "Step 5",
      active: false,
    },
    {
      i: 6,
      name: "Step 6",
      active: false,
    },
    {
      i: 7,
      name: "Step 7",
      active: false,
    },
    {
      i: 8,
      name: "Step 8",
      active: false,
    },
    {
      i: 9,
      name: "Step 9",
      active: false,
    },
  ];
  const totalItems = items.length;
  const numberOfActiveItems = items.filter((item) => item.active).length;
  const progressBarWidth =
    totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

  return (
    <div className="timeline">
      <div
        className="timeline-progress"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
      <div className="timeline-items">
        {items.map((item, i) => (
          <TimelineItem itemData={item}></TimelineItem>
        ))}
      </div>
    </div>
  );
}

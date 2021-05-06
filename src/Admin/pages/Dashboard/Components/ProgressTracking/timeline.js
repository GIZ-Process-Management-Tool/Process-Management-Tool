import React from "react";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

export default function Timeline() {
  const items = [
    {
      i: 1,
      name: "Yarn Storage",
      active: true,
      done: true,
    },
    {
      i: 2,
      name: "Winding",
      active: true,
      done: false,
    },
    {
      i: 3,
      name: "Warping",
      active: true,
      done: true,
    },
    {
      i: 4,
      name: "Looming",
      active: true,
      done: false,
    },
    {
      i: 5,
      name: "Weaving",
      active: true,
      done: false,
    },
    {
      i: 6,
      name: "Checking",
      active: false,
      done: false,
    },
    {
      i: 7,
      name: "Repairing",
      active: false,
      done: false,
    },
    {
      i: 8,
      name: "Packing",
      active: false,
      done: false,
    },
    {
      i: 9,
      name: "Dispatch",
      active: false,
      done: false,
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
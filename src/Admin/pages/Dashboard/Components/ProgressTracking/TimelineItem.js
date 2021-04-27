import React, { useState } from "react";
import TimelineError from "./ErrorComponent";
import "./timeline";

export default function TimelineItem({ itemData }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        key={itemData.i}
        className={"timeline-item" + (itemData.active ? " active" : "")}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className={itemData.done ? "done" : ""}></div>
        {isShown && <TimelineError />}
        <div className="timeline-content">{itemData.name}</div>
      </div>
    </>
  );
}

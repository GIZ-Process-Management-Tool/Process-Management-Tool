import React, { useState } from "react";
import "./timeline";

export default function TimelineItem({ itemData }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      key={itemData.i}
      className={"timeline-item" + (itemData.active ? " active" : "")}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && <div className="
      "> Hello </div>}

      <div className="timeline-content">{itemData.name}</div>
    </div>
  );
}

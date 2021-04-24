import React, { useState } from "react";
import "./HeaderProgressTrack.css";

const HeaderProgressTrack = () => {
  const [orderValue, setOrder] = useState();
  console.log(orderValue);

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  return (
    <div className="PTHead">
      <div className="PTTitle">Progress So Far</div>

      <select
        className="PTOrderDD"
        value={orderValue}
        onChange={handleOrderChange}
        name="carlist"
      >
        <option value="Ray">Raymond Shawl - A2676282</option>
        <option value="Black">Blackberry - A7534873</option>
        <option value="Kirti">Kirti Shawl - B2676282</option>
        <option value="Shawl">Raymond Shawl - A2376282</option>
      </select>
      <button className="PTDetailButton">Details</button>
    </div>
  );
};

export default HeaderProgressTrack;

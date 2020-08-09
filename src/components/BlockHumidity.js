import React from "react";

const BlockHumidity = ({ weather }) => {
  return (
    <div className="block block-humidity">
      <h4>Humidity</h4>
      <p>
        {Math.round(weather.humidity)}
        <span>%</span>
      </p>
    </div>
  );
};

export default BlockHumidity;

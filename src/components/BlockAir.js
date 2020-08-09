import React from "react";
import { unitState } from "../state/state";
import { useRecoilValue } from "recoil";

const BlockAir = ({ weather }) => {
const unit = useRecoilValue(unitState);
  return (
    <div className="block block-air">
      <h4>Air Pressure</h4>
      <p>
        {Math.round(weather.air_pressure)}
		<span>{unit === "f" ? "mb" : "hPa"}</span>
      </p>
    </div>
  );
};

export default BlockAir;

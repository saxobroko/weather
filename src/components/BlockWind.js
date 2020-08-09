import React from "react";
import { convertMphToKph } from "../utils/helper";
import { unitState } from "../state/state";
import { useRecoilValue } from "recoil";

const BlockWind = ({ weather }) => {
const unit = useRecoilValue(unitState);
  return (
    <div className="block block-wind">
      <h4>Wind Status</h4>
      <p>
		{unit === "f"
			? Math.round(weather.wind_speed)
			: Math.round(convertMphToKph(weather.wind_speed))}
			<span>{unit === "f" ? "Mph" : "Kph"}</span>
      </p>
    </div>
  );
};

export default BlockWind;

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
      <div className="block-wind__direction">
        <div className="wind-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="18px"
            height="18px"
            style={{
              transform: `rotate(${Math.round(weather.wind_direction)}deg)`,
            }}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        </div>
        <span>{weather.wind_direction_compass}</span>
      </div>
    </div>
  );
};

export default BlockWind;

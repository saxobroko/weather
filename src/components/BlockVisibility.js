import React from "react";
import { convertMphToKph } from "../utils/helper";
import { unitState } from "../state/state";
import { useRecoilValue } from "recoil";

const BlockVisibility = ({ weather }) => {
	const unit = useRecoilValue(unitState);
  return (
    <div className="block block-visibility">
      <h4>Visibility</h4>
      <p>
		{unit === "f"
			? Math.ceil(weather.visibility)
		: Math.ceil(convertMphToKph(weather.visibility))}
			<span>{unit === "f" ? "Miles" : "Kilometres"}</span>
      </p>
    </div>
  );
};

export default BlockVisibility;

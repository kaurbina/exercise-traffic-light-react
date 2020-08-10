import React, { useState } from "react";
// import PropTypes from "prop-types";

const TrafficLight = () => {
	const [color, setColor] = useState(null);

	const userColor = color => {
		setColor(color);
	};

	return (
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div
					className={
						color == "red" ? "red light selected" : "red light"
					}
					onClick={() => userColor("red")}
				/>
				<div
					className={
						color == "yellow"
							? "yellow light selected"
							: "yellow light"
					}
					onClick={() => userColor("yellow")}
				/>
				<div
					className={
						color == "green"
							? "green light selected"
							: "green light"
					}
					onClick={() => userColor("green")}
				/>
			</div>
		</div>
	);
};

/* TrafficLight.propTypes = {
	initalValue: PropTypes.any
}; */

export default TrafficLight;

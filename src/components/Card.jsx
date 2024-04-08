import React from "react";

const Card = ({
	id,
	image,
	title = "",
	desc = "",
	style = {
		width: "20rem",
		display: "inline-block",
	},
}) => {
	// const imageName = require(image);
	return (
		<>
			<div key={id ? id : "1"} className="card m-3" style={style}>
				<img
					src={image}
					// src={require("../assets/credibilty.jpg")}
					className="card-img-top"
					alt="stock"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{desc}</p>
				</div>
			</div>
		</>
	);
};

export default Card;

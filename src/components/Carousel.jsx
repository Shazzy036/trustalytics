import React from "react";

const Carousel = () => {
	return (
		<div id="carouselExampleCaptions" className="carousel slide">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						style={{borderRadius:"5px"}}
						src={require("../assets/business_writing_on_paper_1200x627.jpg")}
						className="d-block w-100"
						alt="Bussiness writing"
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="crsl-h5">Professional writing</h5>
						<p className="crsl-p">
							Flawless communication, guaranteed. We craft clear,
							concise, and professional writing that gets your
							message across flawlessly.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						style={{borderRadius:"5px"}}
						src={require("../assets/blog writing.jpg")}
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="crsl-h5">Blog Writing</h5>
						<p className="crsl-p">
							Engage your audience, grow your brand. We create
							informative and captivating blog content that fuels
							audience engagement and drives traffic.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						style={{borderRadius:"5px"}}
						src={require("../assets/whitepaper.jpg")}
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="crsl-h5">White Paper Writing</h5>
						<p className="crsl-p">
							Credibility through deep dives. Our experts craft
							insightful white papers that showcase your thought
							leadership and establish you as an industry
							authority.
						</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;

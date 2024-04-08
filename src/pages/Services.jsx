import React from "react";
import { ServiceList } from "../data/ServiceList";
import DescriptionBox from "../components/DescriptionBox";
import { OtherServices } from "../data/OtherServices";
import { Pricing } from "../data/Pricing";

const Services = () => {
	const style = {
		basic: {
			border: "1px solid #a6d609",
			borderRadius: "5px",
			color: "#a6d609",
		},
		standard: {
			border: "1px solid blue",
			borderRadius: "5px",
			color: "blue",
		},
		premium: { border: "1px solid red", borderRadius: "5px", color: "red" },
	};

	return (
		<>
			<section id="services">
				<div className="m-2 p-4">
					<h1>Our Services Includes :</h1>
					<div className="row">
						{ServiceList &&
							ServiceList.map((item) => {
								return (
									<DescriptionBox
										id={item.id}
										title={item.title}
										desc={item.desc}
										style={{}}
									/>
								);
							})}
					</div>
				</div>
			</section>
			<section id="other-services">
				<div className="m-2 p-4">
					<h3 className="m-3">Our Other Services: </h3>
					<div className="row">
						{OtherServices &&
							OtherServices.map((item, idx) => {
								return (
									<div
										key={idx}
										className="card m-2 dscbox"
										style={{
											width: "80%",
											textAlign: "center",
										}}
									>
										<div className="card-body">
											<h5 className="card-title">
												{item}
											</h5>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>
			<section id="pricing">
				<div className="m-2 p-4">
					<h3 className="m-3">Our Pricing are: </h3>
					<div className="row">
						<div className="m3">
							<div className="basic">
								<DescriptionBox
									id={Pricing[0].title}
									title={Pricing[0].title}
									desc={Pricing[0].desc}
									style={style.basic}
								/>
							</div>
							<div className="standard">
								<DescriptionBox
									id={Pricing[1].title}
									title={Pricing[1].title}
									desc={Pricing[1].desc}
									style={style.standard}
								/>
							</div>
							<div className="premium">
								<DescriptionBox
									id={Pricing[2].title}
									title={Pricing[2].title}
									desc={Pricing[2].desc}
									style={style.premium}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;

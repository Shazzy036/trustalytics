import React from "react";
import Carousel from "../components/Carousel";
import { Advantages } from "../data/Advantage";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Fillers } from "../data/Fillers";
// import Services from "./Services";
// import AboutUs from "./AboutUs";

const Home = () => {
	return (
		<>
			<section id="carousel">
				<div className="crsl p-4">
					<Carousel />
				</div>
			</section>
			<section id="about-us">
				<div className="m-2 p-4">
					<h1>About us</h1>
					<p>
						At Trustalytics writing solution, we are passionate
						about education and dedicated to empowering students on
						their journey to academic success. As a leading provider
						of exceptional writing services, we are committed to
						delivering the highest quality work and assisting
						students in achieving their goals. With years of
						experience in the academic writing industry, our team
						comprises seasoned professionals who are experts in
						their respective fields. Our writers hold advanced
						degrees and possess a deep understanding of the nuances
						of academic writing. From PhD theses to ...{" "}
						<Link to="/about-us">READ MORE</Link>
					</p>
				</div>
			</section>
			<section id="benefits">
				<div className="m-2 p-4">
					<h2>Benefits of Professional Writing Services</h2>
					<p>
						Partnering with our expert writers comes with numerous
						advantages:
					</p>
					<div className="cards">
						{Advantages &&
							Advantages.map((item) => {
								return (
									<Card
										id={item.id}
										image={item.image}
										title={item.title}
										desc={item.desc}
										style={{
											width: "20rem",
											display: "inline-block",
										}}
									/>
								);
							})}
					</div>
				</div>
			</section>
			<section id="fillers">
				<div className="m-2 p-4">
					<div className="cards filler">
						<h2>Get our Professional guidance in: </h2>
						{Fillers &&
							Fillers.map((item) => {
								return (
									// <div className="fillers">
									<Card
										id={item.id}
										image={item.image}
										title={item.title}
										style={{
											width: "25rem",
											display: "inline-block",
										}}
									/>
									// </div>
								);
							})}
					</div>

					<div id="guidance">
						<h2>Excellent guide and support</h2>
						<div className="row">
							<div className="col-sm-5 p-4">
								<img
									src={require("../assets/guidance.jpg")}
									alt="guidance"
									style={{ width: "80%", aspectRatio: "2/1" }}
								/>
							</div>
							<div className="col-sm-5 p-4 guid">
								<p>
									At Trustalytics solution, we understand the
									importance of academic excellence and the
									significant role it plays in your
									educational journey. Whether you're pursuing
									a PhD thesis, dissertation for your master's
									degree, or a research paper at the
									graduation level, we are here to support you
									every step of the way. We take pride in our
									ability to deliver exceptional writing
									services that exceed the highest academic
									standards. Our team of expert writers
									possesses a wealth of experience in various
									domains, ensuring that we have subject
									matter experts in every field. Whether you
									require a meticulously crafted PhD thesis, a
									comprehensive dissertation, or a research
									paper of the highest standard, we are here
									to bring your ideas to life
								</p>
							</div>
						</div>
					</div>

					<div id="confidentiality">
						<h2>Confidentialty and Privacy</h2>
						<div className="row">
							<div className="col-sm-5 p-4 confident">
								We recognize the importance of confidentiality
								and professionalism in academic writing. Your
								trust is of utmost importance to us, and we
								ensure that your personal and project details
								remain strictly confidential. You can have peace
								of mind knowing that your information is secure
								and protected throughout our collaboration. Our
								commitment to excellence, originality, and high
								academic standards sets us apart. Explore our
								range of services, browse through testimonials
								from satisfied clients, and take the first step
								towards academic success.
							</div>
							<div className="col-sm-6 p-4 ">
								<img
									src={require("../assets/confident.jpg")}
									alt="confidentiality"
									style={{ width: "80%", aspectRatio: "2/1",marginLeft:"40%" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <Services />
			<AboutUs /> */}
		</>
	);
};

export default Home;

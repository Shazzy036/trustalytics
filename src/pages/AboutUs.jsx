import React from "react";
import { Teams } from "../data/Teams";



const AboutUs = () => {
    const contDet = [
        {
            feild: "Phone",
            detail: "(123) 456-7890",
        },
        {
            feild: "Email",
            detail: "info@example.com",
        },
        {
            feild: "Address",
            detail: "123 Main St, City, State, 12345",
        },
        {
            feild: "Hours",
            detail: "Mon-Fri: 9am-5pm",
        },
    ];
	return (
		<>
			<section id="about">
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
						of academic writing. From PhD theses to master's
						dissertations and research papers, our team is equipped
						with the knowledge and skills to tackle any project with
						precision and finesse. We believe that academic writing
						should be a platform for students to showcase their
						creativity and originality. Our writers excel in the art
						of crafting unique and compelling content that captures
						the essence of your ideas. We encourage students to
						explore new perspectives, challenge existing paradigms,
						and present their work in a way that leaves a lasting
						impression on readers and evaluators. Your trust is of
						utmost importance to us. We maintain the highest
						standards of confidentiality and professionalism
						throughout our collaboration. Your personal information
						and project details will be handled with the utmost care
						and discretion. We are committed to ensuring your
						privacy and security throughout the entire process.
					</p>
				</div>
			</section>
			<section id="team">
				<div className="m-2 p-4">
					<h2>Our Team of Experienced Writers : </h2>
					<h6>
						Our writing team consists of skilled professionals with
						diverse backgrounds and expertise in various industries.
						Each writer undergoes a rigorous selection process to
						ensure top-notch quality.
					</h6>
					<div className="row">
						{Teams &&
							Teams.map((item) => {
								return (
									<div
										key={item.id}
										className="col-sm-3 text-center mb-3 m-2 mb-sm-0 dscbox"
									>
										<div className="card">
											<div
												className="card-body"
												style={{}}
											>
												<h4 className="card-title">
													{item.title}
												</h4>
												<p className="card-text">
													{item.desc}
												</p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="m-2 p-4">
					<h2>Contact Us to Get Started :</h2>
					<h6>
						Ready to enhance your content? Contact us today to
						discuss your writing needs, inquire about our pricing
						and learn how we can help you achieve your goals :
					</h6>
					<div className="contact row">
                        {contDet && contDet.map((item,idx)=>{
                            return(
                                <div className="col-sm-5 m-2 p-2" key={idx}>
                                    <span className="fw-bold">{item.feild} : </span> <span> {item.detail} </span>
                                </div>
                            )
                        })}
                    </div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;

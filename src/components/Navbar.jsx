import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark border-bottom border-body"
				style={{ borderRadius: "5px", height: "85px" }}
				data-bs-theme="dark"
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						TRUSTALYTICS
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/services">
									Services
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/about-us">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

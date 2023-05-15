import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import dropdown from "../../assets/dropdown.png";
import searchIcon from "../../assets/searchIcon.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarContainer">
				<div className="leftContainer">
					<img src={logo} alt="logo" className="logoWidth" />
					<div className="courses">
						<p className="courseText">Courses</p>
						<img src={dropdown} alt="dropdown" />
					</div>
					<div className="programs">
						<p className="courseText">Programs</p>
						<img src={dropdown} alt="dropdown" />
					</div>
				</div>
				<div className="rightContainer">
					<img src={searchIcon} alt="searchIcon" />
					<div className="loginText">
						<p className="login">Log in</p>
					</div>
					<div className="joinNowButton">
						<p className="joinText">join now</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

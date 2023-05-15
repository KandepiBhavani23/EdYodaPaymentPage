import React from "react";
import "./Pointers.css";
import coursesIcon from "../../../../assets/coursesIcon.png";
import contentIcon from "../../../../assets/contentIcon.png";
import webinarIcon from "../../../../assets/webinarIcon.png";
import scholarshipIcon from "../../../../assets/scholarshipIcon.png";
import addFreeIcon from "../../../../assets/addfreeIcon.png";

const Pointers = () => {
	return (
		<>
			<PointerIcon
				imgSrc={coursesIcon}
				title={
					<>
						<span className="color-blue">100+&nbsp; </span> Job relevant courses
					</>
				}
			/>
			<PointerIcon
				imgSrc={contentIcon}
				title={
					<>
						<span className="color-blue">20,000+&nbsp; </span> Hours of content
					</>
				}
			/>
			<PointerIcon
				imgSrc={webinarIcon}
				title={
					<>
						<span className="color-blue">Exclusive&nbsp; </span> webinar access
					</>
				}
			/>
			<PointerIcon
				imgSrc={scholarshipIcon}
				title={
					<>
						Scholarship worth&nbsp;
						<span className="color-blue">₹94,500 </span>
					</>
				}
			/>
			<PointerIcon
				imgSrc={addFreeIcon}
				title={
					<div style={{ whiteSpace: "nowrap" }}>
						<span className="color-blue">Add Free&nbsp;</span>learning
						experience
					</div>
				}
			/>
		</>
	);
};

const PointerIcon = ({ imgSrc, title }) => {
	return (
		<div className="pointersContainer flex-row align-items-center flex-order-one align-self-stretch">
			<img src={imgSrc} alt="imageIcon" />

			<div className="textContainer flex-row justify-content-center align-items-center  flex-order-one">
				<span className="pointerText font-family-roboto font-style-normal font-weight-large flex-grow color-white flex-row align-items-center">
					{title}
				</span>
			</div>
		</div>
	);
};

export default Pointers;

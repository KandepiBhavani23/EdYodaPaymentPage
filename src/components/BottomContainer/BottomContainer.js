import React from "react";
import "./BottomContainer.css";
import LockUpContainer from "./MainLockUpContainer/LockUpContainer";
import FormContainer from "./FormContainer/FormContainer";

const BottomContainer = () => {
	return (
		<div className="bottomContainer">
			<LockUpContainer />
			<FormContainer />
		</div>
	);
};

export default BottomContainer;

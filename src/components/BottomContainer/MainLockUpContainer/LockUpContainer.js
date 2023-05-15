import React from "react";
import "./LockupContainer.css";

import Header from "../MainLockUpContainer/Header/Header";
import Pointer from "../MainLockUpContainer/Pointers/Pointers";

const LockUpContainer = () => {
	return (
		<div className="mainLockupContainer">
			<Header />
			<Pointer />
		</div>
	);
};

export default LockUpContainer;

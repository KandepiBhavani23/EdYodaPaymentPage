import "./ProgressBar.css";

const ProgressBar = () => {
	return (
		<div className="flexItems">
			<ProgressBarItem iconValue={1} text={"Sign Up"} orderValue="order0" />
			<ProgressBarItem iconValue={2} text={"Subscribe"} orderValue="order1" />
		</div>
	);
};

const ProgressBarItem = ({ iconValue, text, orderValue }) => {
	return (
		<div className="progressContainer">
			<ul className={`stageContainer ${orderValue}`}>
				<li className="icon iconValue">{iconValue}</li>
				<li className="iconDesc">{text}</li>
			</ul>
		</div>
	);
};

export default ProgressBar;

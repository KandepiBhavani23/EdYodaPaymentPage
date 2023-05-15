import "./ButtonContainer.css";

const ButtonContainer = () => {
	return (
		<div className="buttonContainer">
			<div className="secondaryButton">
				<p className="cancelButton">cancel</p>
			</div>
			<div className="primaryButton">
				<p className="proceedPayment">proceed to pay</p>
			</div>
		</div>
	);
};

export default ButtonContainer;

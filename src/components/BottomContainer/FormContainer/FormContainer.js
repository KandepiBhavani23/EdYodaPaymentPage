import ButtonContainer from "./ButtonContainer/ButtonContainer";
import "./FormContainer.css";
import InputContainer from "./InputContainer/InputContainer";
import ProgressBar from "./ProgressBar/ProgressBar";
import Summary from "./SummaryContainer/Summary";
import razorPay from "../../../assets/razorPay.jpg";

const FormContainer = () => {
	return (
		<div className="formContainer flex-column align-self-center absolute">
			<ProgressBar />
			<div className="formHeader">
				<h1 className="formHeading">Select your subcription plan</h1>
			</div>
			<InputContainer />
			<Summary />
			<ButtonContainer />
			<div className="iconContainer">
				<img src={razorPay} alt="icon" className="image" />
			</div>
		</div>
	);
};

export default FormContainer;

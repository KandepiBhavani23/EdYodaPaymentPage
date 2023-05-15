import "./InputContainer.css";
import { useState } from "react";
import radioButton from "../../../../assets/radioButton.png";
import radioDisabled from "../../../../assets/radioDisabled.png";
import tickIcon from "../../../../assets/tickIcon.png";
import Summary from "../SummaryContainer/Summary";

const options = [
	{
		option: "Option 1",
		months: 12,
		totalAmount: 179,
		perMonthAmount: 15,
		isRecommended: true,
		subscriptionFee: 18500,
	},
	{
		option: "Option 2",
		months: 6,
		totalAmount: 149,
		perMonthAmount: 25,
		isRecommended: false,
		subscriptionFee: 14900,
	},
	{
		option: "Option 3",
		months: 3,
		totalAmount: 99,
		perMonthAmount: 33,
		isRecommended: false,
		subscriptionFee: 9900,
	},
];

const InputContainer = () => {
	const [selectedOption, setSelectedOption] = useState("Option 1");
	const [showSummary, setShowSummary] = useState(true);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		setShowSummary(true);
	};
	return (
		<>
			<section className="inputContainer">
				<DisabledInputItem />

				{options.map((option, index) => (
					<ActiveInputItem
						key={index}
						orderValue={index + 1}
						text={`${option.months} Months Subscription`}
						subscriptionFee={option.subscriptionFee}
						totalAmount={option.totalAmount}
						isRecommended={option.isRecommended}
						option={option.option}
						selected={selectedOption === option.option}
						onSelect={handleOptionSelect}
						perMonthAmount={option.perMonthAmount}
					/>
				))}
			</section>
			{showSummary && (
				<Summary
					selectedOption={options.find(
						(option) => option.option === selectedOption
					)}
				/>
			)}
		</>
	);
};

const DisabledInputItem = () => {
	return (
		<div className="disabledClassTextField order0">
			<img src={radioDisabled} alt="disabledRadio" />
			<div className="textContainer zindex-one">
				<p className="textDescription colordisabled">12 Months Subscription </p>
				<div className="rightTextContainer">
					<div className="topText">
						<p className="totalText colordisabled">Total</p>
						<p className="topAmount colordisabled">₹99</p>
					</div>
					<div className="bottomText">
						<p className="bottomAmount colordisabled">₹8</p>
						<p className="bottomMonth colordisabled">/mo</p>
					</div>
				</div>
			</div>
			<div className="expiredTag">
				<p className="offerExpired">Offer expired</p>
			</div>
		</div>
	);
};

const ActiveInputItem = ({
	orderValue,
	text,
	totalAmount,
	perMonthAmount,
	isRecommended,
	option,
	selected,
	onSelect,
}) => {
	const handleOptionClick = () => {
		onSelect(option);
	};
	return (
		<div
			className={`activeClassTextField ${orderValue} ${
				selected ? "selectedClass" : ""
			}`}>
			<img
				src={selected ? tickIcon : radioButton}
				alt="activeRadio"
				onClick={handleOptionClick}
			/>
			<div className="textContainer">
				<p className="textDescription grey">{text}</p>
				<div className="rightTextContainer">
					<div className="topText">
						<p className="totalText grey">Total</p>
						<p className="topAmount grey">{totalAmount}</p>
					</div>
					<div className="bottomText">
						<p className="bottomAmount grey">₹{perMonthAmount}</p>
						<p className="bottomMonth grey">/mo</p>
					</div>
				</div>
			</div>
			{isRecommended && (
				<div className="recommendedTag">
					<p className="recommended">Recommended</p>
				</div>
			)}
		</div>
	);
};

export default InputContainer;

import React from "react";
import "./Summary.css";

import offerLimit from "../../../../assets/offerLimit.png";

const Summary = ({ selectedOption }) => {
	if (!selectedOption) {
		return null; // Add this to handle the case where selectedOption is undefined
	}
	const subscriptionFee = selectedOption.subscriptionFee;
	const totalAmount = selectedOption.totalAmount;

	// Calculate the limited offer
	const limitedOffer = subscriptionFee - totalAmount;

	// Calculate the total amount including GST
	const total = totalAmount + totalAmount * 0.18;
	return (
		<div className="summaryContainer ">
			<div className="sumtextContainer">
				<p className="subscriptionText">Subscription Fee</p>
				<p className="amountText">₹{subscriptionFee}</p>
			</div>
			<div className="alertOffer gradient-border gradient-border-wrapper ">
				<div className="alertHeader">
					<p className="limitedTimeOffer">Limited time offer</p>
					<p className="limitedTimeOfferAmount">- ₹{limitedOffer}</p>
				</div>
				<div className="alertBody">
					<img src={offerLimit} alt="offerLimit" />
					<p className="offerValidText">Offer valid till 25th June 2023</p>
				</div>
			</div>
			<div className="bottomTextContainer">
				<p className="leftText">Total (Incl. of 18% GST)</p>
				<p className="rightText">₹{total.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default Summary;

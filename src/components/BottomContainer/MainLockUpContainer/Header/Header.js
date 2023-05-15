import "./Header.css";

const Header = () => {
	return (
		<nav className="header flex-column justify-content-space align-items-start gap-small flex-grow">
			<div className="frame12502 flex-row align-items-center gap-medium align-self-stretch flex-grow font-style-normal">
				<h1 className="frame12502Heading font-family-raleway font-weight-large line-height flex-row align-items-center color-white">
					Access curated courses worth
				</h1>
			</div>
			<div className="frame12408 relative flex-row align-items-end gap-medium align-self-stretch flex-order-one">
				<span className="text18500 font-family-roboto font-style-normal font-weight-large line-height flex-row align-items-center color-white flex-grow">
					₹ 18,500
				</span>
				<span className="linestrike absolute flex-order-one"></span>
				<div className="frame12589 flex-row justify-content-center align-items-end flex-order-two">
					<h1 className="atJustText font-family-raleway font-style-normal font-weight-large line-height flex-row align-items-center color-white flex-grow">
						at just
					</h1>
				</div>
				<div className="frame12590 flex-row justify-content-center align-items-end flex-order-three">
					<h1 className="text99 font-family-roboto font-style-normal font-weight-large line-height flex-row align-items-center color-blue flex-grow">
						₹ 99
					</h1>
				</div>
				<div className="frame12591 flex-row justify-content-center justify-content-end flex-order-four">
					<h1 className="perYear font-family-raleway font-style-normal font-weight-large line-height flex-row align-items-center flex-grow color-white">
						per year!
					</h1>
				</div>
			</div>
		</nav>
	);
};

export default Header;

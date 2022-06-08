import React from "react";

const ShippingDetails = () => {
	return (
		<div className="col-lg-12">
			<div className="account-card mb-0">
				<div className="account-title">
					<h4>Shipping Details</h4>
					<button data-bs-toggle="modal" data-bs-target="#payment-add">
						add card
					</button>
				</div>
				<div className="account-content">{/* Content */}</div>
				<div className="checkout-check">
					<input type="checkbox" id="checkout-check" />
					<label htmlFor="checkout-check">
						By making this purchase you agree to our
						<a href="#">Terms and Conditions</a>.
					</label>
				</div>
				<div className="checkout-proced">
					<a href="invoice.html" className="btn btn-inline">
						proced to checkout
					</a>
				</div>
			</div>
		</div>
	);
};

export default ShippingDetails;

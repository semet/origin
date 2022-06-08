import React, { useState } from "react";
import useSwr, { Fetcher, mutate } from "swr";
import axios from "axios";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { ShippingAddressDetail } from "common";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DeliveryAddress: React.FC<{}> = () => {
	const [selectedAddress, setSelectedAddress] = useState("");
	const [cardIndex, setCardIndex] = useState(-1);
	const SweetAlert = withReactContent(Swal);

	const fetcher: Fetcher<ShippingAddressDetail[]> = async (url: string) => {
		return await axios.get(url).then((res) => res.data.address);
	};

	const { data: address } = useSwr("/api/customer/delivery-address", fetcher);

	const deleteAddress = async (id: string) => {
		await SweetAlert.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await axios
					.post("/api/customer/delivery-address", {
						addressId: id,
					})
					.then((response) => {
						if (response.status === 200) {
							SweetAlert.fire({
								title: "Deleted!",
								text: "Address Deleted Successfully",
								icon: "success",
							});
							mutate("/api/customer/delivery-address");
						}
					});
			}
		});
	};
	return (
		<React.Fragment>
			<div className="col-lg-12">
				<div className="account-card">
					<div className="account-title">
						<h4>delivery address</h4>
						<button data-bs-toggle="modal" data-bs-target="#deliveryAddressAdd">
							add address
						</button>
					</div>
					<div className="account-content">
						<div className="row">
							{address?.map((address, index) => (
								<div className="col-md-6 col-lg-4 " key={index}>
									<div
										className={`profile-card address ${
											cardIndex === index ? "active" : ""
										}`}
										onClick={() => {
											setCardIndex(index);
											setSelectedAddress(address.id);
										}}
									>
										<h6>Home</h6>
										<p>{`${address.addressLine1}, ${address.province.name}, ${address.city.name}`}</p>
										<ul className="user-action">
											<li>
												<button
													className="edit icofont-edit"
													title="Edit This"
													data-bs-toggle="modal"
													data-bs-target="#address-edit"
												/>
											</li>
											<li>
												<button
													className="trash icofont-ui-delete"
													title="Remove This"
													onClick={() => deleteAddress(address.id)}
												/>
											</li>
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<DeliveryAddressForm />
		</React.Fragment>
	);
};

export default DeliveryAddress;

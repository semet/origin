import React from "react";
import useSwr, { Fetcher } from "swr";
import axios from "axios";
import { Customer } from "@prisma/client";

const ContactDetails: React.FC<{}> = () => {
	const fetcher: Fetcher<Customer> = async () => {
		return await axios.get("/api/customer/contact").then((res) => res.data.contact);
	};
	const { data: contact } = useSwr("/api/customer/contact", fetcher);

	return (
		<div className="col-lg-12">
			<div className="account-card">
				<div className="account-title">
					<h4>contact details</h4>
					<button data-bs-toggle="modal" data-bs-target="#contact-add">
						edit contact
					</button>
				</div>
				<div className="account-content">
					<div className="row">
						<div className="col-md-12">
							<dl className="row">
								<dt className="col-sm-2">Name</dt>
								<dd className="col-sm-10">{contact?.name}</dd>

								<dt className="col-sm-2">Email</dt>
								<dd className="col-sm-10">{contact?.email}</dd>

								<dt className="col-sm-2">Phone</dt>
								<dd className="col-sm-10">{contact?.phone}</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;

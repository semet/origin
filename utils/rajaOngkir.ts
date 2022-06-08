import axios from "axios";

const rajaOngkir = axios.create({
	headers: {
		key: process.env.RAJA_ONGKIR_API_KEY as string,
		"content-type": "application/json",
	},
});

export default rajaOngkir;

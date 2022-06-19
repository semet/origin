export const config = {
	service: "hotmail",
	auth: {
		user: process.env.MAILER_USER,
		pass: process.env.MAILER_PASWORD,
	},
};

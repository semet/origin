/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"picsum.photos",
			"platform-lookaside.fbsbx.com",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;

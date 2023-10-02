/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: [
			"images.unsplash.com",
			"naszsklep-api.vercel.app",
			"cloudinary.com",
			"res.cloudinary.com",
		],
	},
};

// turn eslint here to fix the error

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

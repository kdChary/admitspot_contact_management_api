/** @type {import('next').NextConfig} */
const nextConfig = {
	env:{
		DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_SERVICE_HOST: process.env.EMAIL_SERVICE_HOST,
    EMAIL_SERVICE_USER: process.env.EMAIL_SERVICE_USER,
    EMAIL_SERVICE_PASSWORD: process.env.EMAIL_SERVICE_PASSWORD,
	}
};

export default nextConfig;

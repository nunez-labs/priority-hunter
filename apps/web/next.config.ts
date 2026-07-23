import path from "node:path";
import type {NextConfig} from "next"
/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack:{
		root: path.join(__dirname,"../..")
	}
};

export default nextConfig;

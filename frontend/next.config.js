/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "http://localhost:8000/api",
    auth: "http://localhost:8000/auth",
    ImagePath: "http://localhost:8000",
    address: "https://goo.gl/maps/cXrW1djVwd1pn7579",
    email: "mailto:pt.pelabuhankepri@yahoo.com",
    instagram: "https://www.instagram.com/pelabuhankepri_pt/",
  },
};

module.exports = nextConfig;

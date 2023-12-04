/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置导出的静态文件
  // output: "export",
  reactStrictMode: true,
  // 环境变量
  // env: {
  //   APP_ENV: process.env.APP_ENV
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

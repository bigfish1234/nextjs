/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置导出的静态文件
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

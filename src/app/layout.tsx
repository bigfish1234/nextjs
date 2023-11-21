import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import connectToDatabase from "../pages/db";
// 调用函数以连接到数据库
// connectToDatabase();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "硕磐智能",
  description:
    "硕磐智能EIMOS数智平台，助力和加速企业全方位的数字化转型，提升企业经营的效率和效益。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "硕磐智能",
  description:
    "硕磐智能EIMOS数智平台，助力和加速企业全方位的数字化转型，提升企业经营的效率和效益。",
  keywords: "数字化转型, 智能分析, 经营管理, 合同管理, 计划管理, 业务系统",
  authors: [{ name: "硕磐智能" }],
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

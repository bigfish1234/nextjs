import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      硕磐智能 — EIMOS
      <br />
      <Link href="/home-page">首页</Link>
      <br />
      <Link href="/info-center">信息中心</Link>
    </main>
  );
}

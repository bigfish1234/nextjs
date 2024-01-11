import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";
import { usePathname } from "next/navigation";
import Image from "next/image";
import expand_icon from "/public/images/expand-icon.png";

const SideBar = () => {
  const state = store();
  const path = usePathname() as string;

  const handleClick = () => {
    state.handleExpandChange(false);
  };

  return (
    <div
      className={
        state.isExpand
          ? `${styles["mobile-sidebar"]} ${styles["show-sidebar"]}`
          : `${styles["mobile-sidebar"]}`
      }
    >
      <div className={styles["mobile-sidebar-content"]}>
        {state.isExpand ? (
          <Image
            src={expand_icon}
            alt=""
            width={20}
            height={20}
            style={{
              position: "absolute",
              top: -63,
              left: 14,
              rotate: "90deg",
            }}
            onClick={() => {
              state.handleExpandChange(false);
            }}
          />
        ) : null}

        <Link
          href="/"
          onClick={handleClick}
          style={{
            color: ["/", "/contact-us"].includes(path) ? "#F96F25" : "black",
          }}
        >
          EIMOS
        </Link>
        <Link
          href="/information-center"
          onClick={handleClick}
          style={{ color: path == "/information-center" ? "#F96F25" : "black" }}
        >
          信息中心
        </Link>
        <Link
          href="/corporate-information"
          onClick={handleClick}
          style={{
            color: path == "/corporate-information" ? "#F96F25" : "black",
          }}
        >
          关于我们
        </Link>
        <Link
          href="/recruitment"
          onClick={handleClick}
          style={{
            color: ["/recruitment", "/job-detail"].includes(path)
              ? "#F96F25"
              : "black",
          }}
        >
          加入我们
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

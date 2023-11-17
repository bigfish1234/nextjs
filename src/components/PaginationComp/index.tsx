import { Pagination } from "antd";
import styles from "./index.module.css";

const PaginationComp = ({ page, current, size, total, onChange }: any) => {
  return (
    <div
      className={styles["pagination-wrapper"]}
      style={{ backgroundColor: page == "info" ? " #fff" : "#f5f5f7" }}
    >
      <Pagination
        current={current}
        pageSize={size}
        total={total}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationComp;

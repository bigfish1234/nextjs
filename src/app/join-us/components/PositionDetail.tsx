import { store } from "@/store";
import styles from "../index.module.css";

const PositionDetail = ({ isMobile, jobDetail, count, index }: any) => {
  const state = store();
  const checkDetail = () => {
    window.location.href = "/join-us/job-detail";
    state.onPageChange("detail");
  };
  return (
    <div
      className={styles["position-detail-wrapper"]}
      style={{ borderBottom: count == index + 1 ? 0 : "5px solid #F5F5F7" }}
    >
      <span className={styles["detail-title"]}>{`${jobDetail.jobName} ( ${
        jobDetail.num
      }名 ) - ${jobDetail.type == 0 ? "社会招聘" : "校园招聘"}`}</span>
      <div className={styles["deatil-content"]}>
        {jobDetail.abilities.map((item: string, index: number) => (
          <p key={index}>{`${index + 1}. ${item}`}</p>
        ))}
      </div>
      <div
        className={
          isMobile ? styles["check-detail-btn-mb"] : styles["check-detail-btn"]
        }
        onClick={checkDetail}
      >
        查看详情
      </div>
    </div>
  );
};

export default PositionDetail;

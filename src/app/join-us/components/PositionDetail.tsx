import { store } from "@/store";
import styles from "../index.module.css";
import { useRouter } from "next/navigation";

const PositionDetail = ({ isMobile, jobDetail, count, index }: any) => {
  const state = store();
  const router = useRouter();
  const checkDetail = () => {
    router.push("/join-us/job-detail");
  };
  return (
    <div
      className={styles["position-detail-wrapper"]}
      style={{ borderBottom: count == index + 1 ? 0 : "5px solid #F5F5F7" }}
    >
      <span
        className={styles["detail-title"]}
      >{`${jobDetail.jobName} ( ${jobDetail.num}名 ) - ${jobDetail.category}`}</span>
      <div className={styles["deatil-content"]}>
        {/* {jobDetail.abilities.map((item: string, index: number) => (
          <p key={index}>{`${index + 1}. ${item}`}</p>
        ))} */}
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

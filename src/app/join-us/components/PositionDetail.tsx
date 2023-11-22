import styles from "../index.module.css";
import { useRouter } from "next/navigation";

const PositionDetail = ({ isMobile, jobDetail, count, index }: any) => {
  const router = useRouter();
  const checkDetail = (id: number) => {
    router.push(`/join-us/job-detail?id=${id}`);
  };
  return (
    <div
      className={styles["position-detail-wrapper"]}
      style={{ borderBottom: count == index + 1 ? 0 : "5px solid #F5F5F7" }}
    >
      <span
        className={styles["detail-title"]}
      >{`${jobDetail.jobName} (${jobDetail.num}名)`}</span>
      <div
        className={styles["deatil-content"]}
        dangerouslySetInnerHTML={{ __html: jobDetail.intro }}
      ></div>
      <div
        className={
          isMobile ? styles["check-detail-btn-mb"] : styles["check-detail-btn"]
        }
        onClick={() => checkDetail(jobDetail.jobid)}
      >
        查看详情
      </div>
    </div>
  );
};

export default PositionDetail;

import { store } from "@/store";
import styles from "../index.module.css";

const PositionDetail = ({ isMobile }: any) => {
  const state = store();
  const checkDetail = () => {
    window.location.href = "/join-us/job-detail";
    state.onPageChange("job-detail");
  };
  return (
    <div className={styles["position-detail-wrapper"]}>
      <span className={styles["detail-title"]}>SAAS产品总监（1名）</span>
      <div className={styles["deatil-content"]}>
        <p>
          1.
          负责本领域商业产品和技术方向的演进，研究业界本领域的发展方向、先进技术、工具和IT平台等；
        </p>
        <p>
          2. 制定本领域的SAAS产品业务规划或应用架构，确保架构成功在产品中落地；
        </p>
        <p> 3. 负责本领域的业务架构设计和应用产品规划与建设工作；</p>
        <p>
          4.
          主导输出本领域业务解决方案或IT解决方案，以及与解决方案配套的详细需求规格和原型；
        </p>
        <p>5. 负责完成本领域的应用产品运营。</p>
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

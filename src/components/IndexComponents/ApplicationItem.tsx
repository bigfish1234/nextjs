import Image from "next/image";
import styles from "./index.module.css";
import getIcon from "/public/images/get-icon.png";
import { store } from "@/store";

const ApplicationItem = ({ item, isMobile, plan }: any) => {
  const state = store();
  const renderContent = () => {
    return (
      <>
        {state.plan == "IBA" ? (
          <div className={styles["content-wrapper"]}>
            <div className={styles["content-wrapper-3"]}>
              <Image
                src="/images/icon/fengxmx.png"
                alt="分析模型"
                width={28}
                height={28}
              />
              <span> 分析模型</span>
            </div>
            <div className={styles["content-wrapper-3"]}>
              <Image
                src="/images/icon/cit.png"
                alt="指标集"
                width={28}
                height={28}
              />
              <span>指标集</span>
            </div>
            <div className={styles["content-wrapper-3"]}>
              <Image
                src="/images/icon/renwl.png"
                alt="任务令"
                width={28}
                height={28}
              />
              <span>任务令</span>
            </div>
          </div>
        ) : state.plan == "LTC" ? (
          <>
            <div className={styles["content-wrapper"]}>
              <div className={styles["content-wrapper-4"]}>
                <Image
                  src="/images/icon/hetjgh.png"
                  alt="合同结构化"
                  width={28}
                  height={28}
                />
                <span>合同结构化</span>
              </div>
              <div className={styles["content-wrapper-4"]}>
                <Image
                  src="/images/icon/4ult.png"
                  alt="4U拉通*"
                  width={28}
                  height={28}
                />
                <span>4U拉通*</span>
              </div>
              <div className={styles["content-wrapper-4"]}>
                <Image
                  src="/images/icon/shijjx.png"
                  alt="时间基线"
                  width={28}
                  height={28}
                />
                <span>时间基线</span>
              </div>
              <div className={styles["content-wrapper-4"]}>
                <Image
                  src="/images/icon/xingcpkf.png"
                  alt="新产品开发"
                  width={28}
                  height={28}
                />
                <span>新产品开发</span>
              </div>
            </div>
            <p className={styles.note}>
              *4U: 销售单元，交付单元，收入单元，回款单元
            </p>
          </>
        ) : (
          <div className={styles["content-wrapper"]}>
            <div className={styles["content-wrapper-2"]}>
              <Image
                src="/images/icon/moxyc.png"
                alt="预测模型"
                width={28}
                height={28}
              />
              <span>预测模型</span>
            </div>
            <div className={styles["content-wrapper-2"]}>
              <Image
                src="/images/icon/sopmxgl.png"
                alt="OP管理模型"
                width={28}
                height={28}
              />
              <span>S&OP管理模型</span>
            </div>
          </div>
        )}
      </>
    );
  };

  const { des, ability } = item || {};
  return (
    <div className={styles["app-item"]}>
      {des.map((desItem: string, index: number) => {
        return (
          <div key={index} style={{ display: "flex", marginBottom: 16 }}>
            <div style={{ width: 16, marginRight: 8 }}>
              <Image
                src={getIcon}
                alt="get"
                width={20}
                height={20}
                style={{ marginRight: 8, display: "inline-block" }}
              />
            </div>
            <div
              style={{ lineHeight: "22px", width: isMobile ? "100%" : "80%" }}
            >
              {desItem}
            </div>
          </div>
        );
      })}
      <div style={{ paddingLeft: 28, fontWeight: 600 }}>
        核心功能： <span style={{ color: "#F96F25" }}>{ability}</span>
      </div>
      {renderContent()}
    </div>
  );
};

export default ApplicationItem;

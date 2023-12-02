import Image from "next/image";
import styles from "../index.module.css";
import { store } from "@/store";
import { ServiceForm } from "@/components";

import guidenceImg from "/public/images/advice-icon.png";
import closeIcon from "/public/images/close-icon.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import { Form } from "antd";
import moment from "moment";
import { contactUs, handleSendEmail } from "@/server/api";
import { useRouter } from "next/navigation";

const ServiceBtn = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [form] = Form.useForm();
  const state = store();
  const router = useRouter();
  const clickToGuidence = () => {
    state.handleOpenChange(!state.isOpen);
  };

  const submit = async () => {
    try {
      await form.validateFields();
      const data = form.getFieldsValue();
      Object.assign(data, {
        createtime: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
      await contactUs(data);
      await handleSendEmail(data);

      state.handleOpenChange(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Image
        src={guidenceImg}
        alt="立即咨询"
        style={{
          visibility: !isMobile && !state.isOpen ? "visible" : "hidden",
        }}
        className={styles["guide-service"]}
        onClick={clickToGuidence}
      />

      {state.isOpen ? (
        <div className={styles["service-form"]}>
          <div
            style={{
              width: "100%",
              height: 46,
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 99,
              padding: "10px 15px",
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            <span style={{ fontSize: 20 }}>咨询服务</span>
            <Image
              src={closeIcon}
              alt="close"
              width={16}
              height={16}
              style={{ position: "absolute", right: 15, cursor: "pointer" }}
              onClick={() => state.handleOpenChange(false)}
            />
          </div>
          <ServiceForm submit={submit} form={form} />
          <div className={styles["submit-btn-wrapper"]}>
            <div
              className={styles["submit-btn-pc"]}
              style={{ visibility: isMobile ? "hidden" : "visible" }}
              onClick={submit}
            >
              提 交
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ServiceBtn;

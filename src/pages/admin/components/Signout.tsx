/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import useAdmin from "../effects/useAdmin";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

const SignOut = () => {
  const { isModalVisible, setModalVisible, user, setUser } = useAdmin();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      console.log("🚀 ~ file: Signout.tsx:14 ~ useEffect ~ session:", session);
      setModalVisible(true);
    }
  }, [session]);

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  // const getUserInfo = async () => {
  //   const user = await axios.get("/admin");
  //   setUser(user);
  // };

  return (
    <Modal
      title="Basic Modal"
      open={isModalVisible}
      onOk={() => signIn()}
      onCancel={() => setModalVisible(false)}
    >
      token 过期,请重新登录!
    </Modal>
  );
};

export default SignOut;

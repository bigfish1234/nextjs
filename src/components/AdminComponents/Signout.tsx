/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SignOut = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      console.log("🚀 ~ file: Signout.tsx:14 ~ useEffect ~ session:", session);
      setModalVisible(true);
    }
  }, [session]);

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

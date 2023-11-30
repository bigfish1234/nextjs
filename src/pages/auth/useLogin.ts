import { login } from "@/server/api";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { encrypt } from "@/utils/jsencrypt";
import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleCancel = () => {
    //
  };

  const handleLogin = (form: any) => {
    form.validateFields().then(async () => {
      setLoading(true);
      const info = form.getFieldsValue();
      const { user, password, remember = false } = info;
      signIn("credentials", {
        userName: user,
        password,
        callbackUrl: "/admin",
      });
    });
  };
  return {
    handleCancel,
    handleLogin,
    loading,
  };
};

export default useLogin;

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginComp = dynamic(() => import("@/components/LoginComp"), {
  ssr: false,
});

const Login = () => {
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
  return (
    <LoginComp
      handleCancel={handleCancel}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
};

export default Login;

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { message } from "antd";

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
      try {
        const result: any = await signIn("credentials", {
          userName: user,
          password,
          redirect: false,
        });
        if (!result.ok || result?.error) {
          throw new Error(result?.error);
        }
        message.success("登录成功");
        router.push("/admin");
      } catch {
        setLoading(false);
        message.error("请输入正确的账号密码！");
      }
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

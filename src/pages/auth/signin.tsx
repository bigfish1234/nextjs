import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { message } from "antd";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import Metadata from "next/head";

const LoginComp = dynamic(() => import("@/components/LoginComp"), {
  ssr: false,
});

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
    if (isMobile) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session]);

  const handleCancel = () => {
    router.push("/");
  };

  const handleLogin = (form: any) => {
    form.validateFields().then(async () => {
      setLoading(true);
      const info = form.getFieldsValue();
      const { user, password } = info;
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
    <div>
      <Metadata>
        <title>硕磐智能 - 用户登录</title>
      </Metadata>
      {isMobile ? null : (
        <LoginComp
          handleCancel={handleCancel}
          handleLogin={handleLogin}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Login;

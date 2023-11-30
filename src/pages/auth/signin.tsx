import dynamic from "next/dynamic";
import useLogin from "./useLogin";

const LoginComp = dynamic(() => import("@/components/LoginComp"), {
  ssr: false,
});

const Login = () => {
  const { handleCancel, handleLogin, loading } = useLogin();
  return (
    <LoginComp
      handleCancel={handleCancel}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
};

export default Login;

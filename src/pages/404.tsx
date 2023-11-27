/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/index");
  }, []);

  return <div></div>;
};
export default ErrorPage;

/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return <div></div>;
};
export default ErrorPage;

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home-page");
  }, []);

  return <div></div>;
};
export default ErrorPage;

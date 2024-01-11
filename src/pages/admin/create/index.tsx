import { message } from "antd";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Metadata from "next/head";
import { useEffect } from "react";

const CreateComp = dynamic(
  () => import("@/components/AdminComponents/CreateComp"),
  {
    ssr: false,
  }
);
const MyHeader = dynamic(
  () => import("@/components/AdminComponents/TabHeader"),
  {
    ssr: false,
  }
);
const Create = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session || status !== "authenticated") {
      router.push("/auth/signin");
    }
  }, [session]);

  if (status === "loading") {
    return null;
  }

  return (
    <div>
      <Metadata>
        <title>新增职位</title>
      </Metadata>
      <MyHeader />
      <CreateComp />
    </div>
  );
};

export default Create;

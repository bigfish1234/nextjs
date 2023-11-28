import dynamic from "next/dynamic";

const CreateComp = dynamic(() => import("../components/CreateComp"), {
  ssr: false,
});
const Create = () => {
  return <CreateComp />;
};

export default Create;

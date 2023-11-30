import dynamic from "next/dynamic";

const CreateComp = dynamic(() => import("../components/CreateComp"), {
  ssr: false,
});
const MyHeader = dynamic(() => import("../components/TabHeader"), {
  ssr: false,
});
const Create = () => {
  return (
    <div>
      <MyHeader />
      <CreateComp />
    </div>
  );
};

export default Create;

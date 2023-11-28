import { IStatus } from "@/pages/recruitment/type";
import { deleteJob, getJobDetail, postJobInfo, updateJob } from "@/server/api";
import { store } from "@/store";
import { Button, Popconfirm, Select, Space, message } from "antd";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useAdmin = () => {
  const [current, setCurrent] = useState(1);
  const [params, setParams] = useState<IStatus>({});
  const state = store();
  const router = useRouter();

  const columns: any[] = [
    {
      title: "序号",
      dataIndex: "index",
      search: false,
      width: 50,
      render: (_: any, record: any, index: number) =>
        (current - 1) * 10 + (index + 1),
    },
    {
      title: "招聘职位",
      dataIndex: "jobName",
      width: 200,
      ellipsis: true,
      renderFormItem: () => {
        return (
          <Select
            placeholder="请选择"
            allowClear
            showSearch
            optionFilterProp="label"
            options={state.typeList}
            onChange={(value: number) => {
              setParams({
                ...params,
                type: value,
              });
            }}
          />
        );
      },
    },
    {
      title: "招聘类型",
      dataIndex: "category",
      width: 100,
      ellipsis: true,
      renderFormItem: () => {
        return (
          <Select
            placeholder="请选择"
            allowClear
            showSearch
            optionFilterProp="label"
            options={state.posList}
            onChange={(value: number) => {
              setParams({
                ...params,
                pos: value,
              });
            }}
          />
        );
      },
    },
    {
      title: "工资",
      dataIndex: "salary",
      search: false,
      width: 100,
      ellipsis: true,
    },
    {
      title: "福利",
      dataIndex: "welfare",
      search: false,
      width: 200,
      ellipsis: true,
    },
    {
      title: "岗位职责",
      dataIndex: "intro",
      search: false,
      ellipsis: true,
    },
    {
      title: "岗位要求",
      dataIndex: "requireability",
      search: false,
      ellipsis: true,
    },
    {
      title: "创建时间",
      dataIndex: "createtime",
      width: 150,
      search: false,
      ellipsis: true,
    },
    {
      title: "操作",
      dataIndex: "actions",
      search: false,
      width: 100,
      render: (_: any, record: any) => {
        return (
          <Space style={{ color: "blue" }}>
            <Popconfirm
              title="确认要删除吗？"
              onConfirm={() => handleDelete(record.jobid)}
              okText="是"
              cancelText="否"
            >
              <a>删除</a>
            </Popconfirm>
            <a
              onClick={() => {
                router.push(`/admin/create?id=${record.jobid}`);
              }}
            >
              编辑
            </a>
          </Space>
        );
      },
    },
  ];

  // 删除
  const handleDelete = async (id: number) => {
    try {
      await deleteJob({ id });
      message.success("删除成功");
      state.initData({});
    } catch (error) {
      console.log(error);
    }
  };

  // 编辑
  const handleEdit = async (id: number, form: any) => {
    getJobDetail(id).then((res) => {
      const data = formatData(res.data);
      form?.setFieldsValue(data);
    });
  };

  const formatData = (detail: any) => {
    const {
      intro = "",
      requireability = "",
      salary = "",
      totalmonth,
      type,
      jobName,
      category,
      welfare,
      createtime,
    } = detail;
    const introList = intro.split("<br/>").map((item: string) => ({
      intro: item?.split(".")[1],
    }));
    const requireList = requireability.split("<br/>").map((item: string) => ({
      requireability: item?.split(".")[1],
    }));
    const data = { type, jobName, category, welfare };
    Object.assign(data, {
      introList,
      requireList,
      salary: salary.split("k")[0],
      totalmonth: totalmonth + "",
      createtime: moment(createtime, "YYYY-MM-DD HH:mm:ss"),
    });
    return data;
  };

  // 取消
  const handleCancel = () => {
    router.push(`/admin`);
  };

  // 提交
  const handleSubmit = (form: any) => {
    form.validateFields().then(async () => {
      const formData = form.getFieldsValue();
      const {
        introList,
        requireList,
        totalmonth,
        jobName,
        salary,
        type,
        welfare,
      } = formData;
      const data = { jobName, type, welfare };
      Object.assign(data, {
        salary: salary + "k",
        category: type == 0 ? "社会招聘" : "校园招聘",
        location: "杭州",
        totalmonth: Number(totalmonth),
        intro: introList
          .map(
            (item: { intro: string }, index: number) =>
              index + 1 + "." + item.intro
          )
          .join("<br/>"),
        requireability: requireList
          .map(
            (item: { requireability: string }, index: number) =>
              index + 1 + "." + item.requireability
          )
          .join("<br/>"),
        createtime: moment().format("YYYY-MM-DD HH:mm:ss") + "",
      });

      const url = new URL(location.href);
      const id = Number(url.searchParams.get("id"));

      if (id) {
        await updateJob(id, data);
        message.success("修改成功");
      } else {
        await postJobInfo(data);
        message.success("提交成功");
      }
      router.push(`/admin`);
    });
  };

  return {
    columns,
    current,
    setCurrent,
    params,
    setParams,
    handleCancel,
    handleSubmit,
    handleEdit,
  };
};
export default useAdmin;

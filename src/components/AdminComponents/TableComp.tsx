/* eslint-disable react-hooks/exhaustive-deps */
import { ProTable } from "@ant-design/pro-components";
import { Button, Popconfirm, Select, Space, message } from "antd";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { store } from "@/store";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { IStatus } from "@/lib/type";
import { deleteJob } from "@/server/api";

const TableComp = () => {
  const [current, setCurrent] = useState(1);
  const [params, setParams] = useState<IStatus>({});
  const state = store();
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session) {
      signOut({ callbackUrl: `${location.origin}/auth/signin` });
    } else {
      state.initData({});
      state.getTypeList();
      state.getPosList();
    }
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteJob({ id });
      message.success("删除成功");
      state.initData({});
    } catch (error) {
      console.log(error);
    }
  };

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
              <a key="delete">删除</a>
            </Popconfirm>
            <a
              key="edit"
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

  return (
    <div className={styles.wrapper}>
      <ProTable
        dataSource={state.jobListAll}
        columns={columns}
        toolBarRender={false}
        key="jobid"
        size="small"
        pagination={{
          size: "small",
          total: state.total,
          showSizeChanger: false,
          pageSize: 10,
          current: current,
          onChange: (value: number) => {
            setCurrent(value);
          },
        }}
        search={{
          labelWidth: "auto",
          optionRender(searchConfig: any, props: any) {
            return [
              <Button
                key="resetText"
                onClick={() => {
                  props.form?.resetFields();
                  state.initData({});
                  setParams({});
                }}
              >
                {searchConfig.resetText}
              </Button>,
              <Button
                key="searchText"
                type="primary"
                onClick={() => {
                  state.initData(params);
                }}
              >
                {searchConfig.searchText}
              </Button>,
              <Button
                key="add"
                type="primary"
                ghost
                onClick={() => {
                  router.push("/admin/create");
                }}
              >
                + 新增
              </Button>,
            ];
          },
        }}
      />
    </div>
  );
};

export default TableComp;

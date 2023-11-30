/* eslint-disable react-hooks/exhaustive-deps */
import { ProTable } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import styles from "../index.module.css";
import { useEffect } from "react";
import { store } from "@/store";
import useAdmin from "../effects/useAdmin";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const TableComp = () => {
  const { columns, current, setCurrent, params, setParams } = useAdmin();
  const state = store();
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session) {
      signOut({ callbackUrl: "/auth/signin" });
    }
    state.initData({});
    state.getTypeList();
    state.getPosList();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles["header"]}>
        <div>职位管理</div>
        <Button type="primary" onClick={() => router.push("./admin/create")}>
          + 新增
        </Button>
      </div>
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
            ];
          },
        }}
      />
    </div>
  );
};

export default TableComp;

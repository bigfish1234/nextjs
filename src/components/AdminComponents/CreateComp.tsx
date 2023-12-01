/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Form, Input, Row, Select, Space, message } from "antd";
import styles from "./index.module.css";
import { store } from "@/store";
import { useEffect } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { getJobDetail, postJobInfo, updateJob } from "@/server/api";
import { useRouter } from "next/navigation";

const CreateComp = () => {
  const state = store();
  const [form] = Form.useForm();
  const router = useRouter();

  const handleCancel = () => {
    router.push(`/admin`);
  };

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

  useEffect(() => {
    state.getTypeList();
  }, []);

  useEffect(() => {
    const url = new URL(location.href);
    const id = Number(url.searchParams.get("id"));
    id && handleEdit(id, form);
  }, []);

  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["header"]} style={{ marginBottom: 20 }}>
          <div>新增职位</div>
        </div>
        <div className={styles["form-wrapper"]}>
          <Form layout="vertical" name="job" form={form}>
            <Col span={8}>
              <Form.Item
                label="职位名称"
                name="jobName"
                rules={[{ required: true }]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item
                label="职位类型"
                name="type"
                rules={[{ required: true }]}
              >
                <Select placeholder="请选择" options={state.typeList} />
              </Form.Item>
              <Form.Item label="薪资" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="salary"
                  style={{ display: "inline-block", width: "calc(60% - 8px)" }}
                  rules={[{ required: true }]}
                >
                  <Input suffix="k" />
                </Form.Item>
                <Form.Item
                  name="totalmonth"
                  style={{
                    display: "inline-block",
                    width: "40%",
                    marginLeft: 8,
                  }}
                  rules={[{ required: true }]}
                >
                  <Input suffix="薪" />
                </Form.Item>
              </Form.Item>
              <Form.Item label="福利" name="welfare">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label="岗位职责">
                <Form.List name="introList" initialValue={[""]}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(
                        ({ key, name, ...restField }, index: number) => (
                          <>
                            <Row>
                              <Col span={22}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "intro"]}
                                >
                                  <Input
                                    prefix={
                                      <span style={{ width: 20 }}>
                                        {index + 1}.
                                      </span>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={1} push={1}>
                                <MinusCircleOutlined
                                  onClick={() => remove(name)}
                                />
                              </Col>
                            </Row>
                          </>
                        )
                      )}
                      <Button
                        icon={<PlusCircleOutlined />}
                        type="link"
                        onClick={() => add()}
                      >
                        添加
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
              <Form.Item label="岗位要求">
                <Form.List name="requireList" initialValue={[""]}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(
                        ({ key, name, ...restField }, index: number) => (
                          <>
                            <Row>
                              <Col span={22}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "requireability"]}
                                >
                                  <Input
                                    prefix={
                                      <span style={{ width: 20 }}>
                                        {index + 1}.
                                      </span>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={1} push={1}>
                                <MinusCircleOutlined
                                  onClick={() => remove(name)}
                                />
                              </Col>
                            </Row>
                          </>
                        )
                      )}
                      <Button
                        icon={<PlusCircleOutlined />}
                        type="link"
                        onClick={() => add()}
                      >
                        添加
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
            </Col>
          </Form>
        </div>
      </div>

      <div className={styles.footer}>
        <Space style={{ float: "right" }}>
          <Button onClick={handleCancel}>取消</Button>
          <Button
            type="primary"
            onClick={() => {
              handleSubmit(form);
            }}
          >
            提交
          </Button>
        </Space>
      </div>
    </>
  );
};

export default CreateComp;

/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import styles from "../index.module.css";
import { store } from "@/store";
import { useEffect } from "react";
import useAdmin from "../effects/useAdmin";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const CreateComp = () => {
  const state = store();
  const [form] = Form.useForm();
  const { handleCancel, handleSubmit, handleEdit } = useAdmin();

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

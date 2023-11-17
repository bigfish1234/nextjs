"use client";
import { Form, Row, Col, Select, Input } from "antd";
import styles from "../index.module.css";

const SearchComp = ({ isMobile, handleChange, status, setStatus }: any) => {
  const [form] = Form.useForm();
  const typeList = [
    {
      label: "校园招聘",
      value: 1,
    },
    {
      label: "社会招聘",
      value: 0,
    },
  ];

  const posList = [
    {
      label: "SAAS产品总监",
      value: 0,
    },
    {
      label: "数据治理产品经理",
      value: 1,
    },
    {
      label: "安全总监",
      value: 2,
    },
    {
      label: "前端工程师",
      value: 3,
    },
  ];

  return (
    <div className={styles["search-wrapper"]}>
      <Form form={form} size="large">
        {isMobile ? (
          <div>
            <Row>
              <Form.Item noStyle name="searchContent">
                <Input.Search
                  style={{ width: "100%" }}
                  placeholder="请输入关键词"
                  onChange={(e) => {
                    setStatus({
                      ...status,
                      keyword: e.target.value,
                    });
                  }}
                />
              </Form.Item>
            </Row>
            <Row style={{ marginTop: 18 }}>
              <Col span={11}>
                <Form.Item noStyle name="type">
                  <Select
                    allowClear
                    options={typeList}
                    style={{ width: "100%" }}
                    placeholder="请选择"
                    onClear={() =>
                      handleChange({
                        pos: undefined,
                        type: undefined,
                      })
                    }
                    onChange={(value: number) => {
                      const params = {
                        ...status,
                        type: value,
                      };
                      setStatus(params);
                      handleChange(params);
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={11} offset={2}>
                <Form.Item noStyle name="position">
                  <Select
                    allowClear
                    options={posList}
                    style={{ width: "100%" }}
                    placeholder="请选择"
                    onClear={() =>
                      handleChange({
                        pos: undefined,
                        type: undefined,
                      })
                    }
                    onChange={(value: number) => {
                      setStatus({
                        ...status,
                        pos: value,
                      });
                      handleChange({
                        ...status,
                        pos: value,
                      });
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Col span={7}>
              <Form.Item label="招聘类型" name="type">
                <Select
                  allowClear
                  options={typeList}
                  style={{ width: "100%" }}
                  placeholder="请选择"
                  onClear={() =>
                    handleChange({
                      pos: undefined,
                      type: undefined,
                    })
                  }
                  onChange={(value: number) => {
                    const params = {
                      ...status,
                      type: value,
                    };
                    setStatus(params);
                    handleChange(params);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={7} offset={1}>
              <Form.Item label="招聘职位" name="position">
                <Select
                  allowClear
                  options={posList}
                  style={{ width: "100%" }}
                  placeholder="请选择"
                  onClear={() =>
                    handleChange({
                      pos: undefined,
                      type: undefined,
                    })
                  }
                  onChange={(value: number) => {
                    const params = {
                      ...status,
                      pos: value,
                    };
                    setStatus(params);
                    handleChange(params);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item noStyle name="searchContent">
                <Input.Search
                  style={{ width: "100%" }}
                  placeholder="请输入关键词"
                  onChange={(e) => {
                    setStatus({
                      ...status,
                      keyword: e.target.value,
                    });
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form>
    </div>
  );
};

export default SearchComp;

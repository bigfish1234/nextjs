"use client";
import { Form, Row, Col, Select, Input } from "antd";
import styles from "../index.module.css";
import { store } from "@/store";
import { useDebounceFn } from "ahooks";

const SearchComp = ({ isMobile, handleChange, status, setStatus }: any) => {
  const [form] = Form.useForm();
  const state = store();

  const handleClearType = () => {
    const temp = { ...status, type: -1 };
    setStatus(temp);
  };

  const handleClearPos = () => {
    const temp = { ...status, pos: -1 };
    setStatus(temp);
  };

  const handleSearch = useDebounceFn(
    (value: string) => {
      setStatus({
        ...status,
        keyword: value,
      });
    },
    {
      wait: 500,
    }
  );

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
                  onChange={(e) => handleSearch.run(e.target.value)}
                />
              </Form.Item>
            </Row>
            <Row style={{ marginTop: 18 }}>
              <Col span={11}>
                <Form.Item noStyle name="type">
                  <Select
                    allowClear
                    options={state.typeList}
                    style={{ width: "100%" }}
                    placeholder="请选择"
                    onClear={handleClearType}
                    onChange={(value: number) => {
                      setStatus({ ...status, type: value });
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={11} offset={2}>
                <Form.Item noStyle name="position">
                  <Select
                    allowClear
                    options={state.posList}
                    style={{ width: "100%" }}
                    placeholder="请选择"
                    onClear={handleClearPos}
                    onChange={(value: number) => {
                      setStatus({
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
                  options={state.typeList}
                  style={{ width: "100%" }}
                  placeholder="请选择"
                  onClear={handleClearType}
                  onChange={(value: number) => {
                    setStatus({
                      ...status,
                      type: value,
                    });
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={7} offset={1}>
              <Form.Item label="招聘职位" name="position">
                <Select
                  allowClear
                  options={state.posList}
                  style={{ width: "100%" }}
                  placeholder="请选择"
                  onClear={handleClearPos}
                  onChange={(value: number) => {
                    setStatus({
                      ...status,
                      pos: value,
                    });
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item noStyle name="searchContent">
                <Input.Search
                  style={{ width: "100%" }}
                  placeholder="请输入关键词"
                  onChange={(e) => handleSearch.run(e.target.value)}
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

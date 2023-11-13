"use client";
import { Form, Row, Col, Select, Input } from "antd";
import styles from "../index.module.css";

const SearchComp = ({ isMobile }: any) => {
  const [form] = Form.useForm();
  return (
    <div className={styles["search-wrapper"]}>
      <Form form={form} size="large">
        {isMobile ? (
          <div>
            <Row>
              <Form.Item noStyle name="searchContent">
                <Input.Search
                  style={{ width: "100%" }}
                  placeholder="搜索职位"
                />
              </Form.Item>
            </Row>
            <Row style={{ marginTop: 18 }}>
              <Col span={11}>
                <Form.Item noStyle name="type">
                  <Input
                    style={{ width: "100%" }}
                    placeholder="请输入招聘类型"
                  />
                </Form.Item>
              </Col>
              <Col span={11} offset={2}>
                <Form.Item noStyle name="position">
                  <Input
                    style={{ width: "100%" }}
                    placeholder="请输入招聘职位"
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Col span={7}>
              <Form.Item label="招聘类型" name="type">
                <Input style={{ width: "100%" }} placeholder="请输入招聘类型" />
              </Form.Item>
            </Col>
            <Col span={7} offset={1}>
              <Form.Item label="招聘职位" name="position">
                <Input style={{ width: "100%" }} placeholder="请输入招聘职位" />
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item noStyle name="searchContent">
                <Input style={{ width: "100%" }} placeholder="请输入搜索条件" />
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form>
    </div>
  );
};

export default SearchComp;

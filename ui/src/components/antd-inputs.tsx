import { FC } from "react";
import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { ComponentProp } from "./review";
import { Input, Tooltip, Space } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

const ComponentPropTypes = {};
export type ComponentProps = InferProps<typeof ComponentPropTypes> &
  ComponentProp;

export const AntdInputs: FC<ComponentProps> = () => {
  return (
    <>
      <h2>TextArea</h2>
      <Input.TextArea id="textarea" rows={3} />
      <br />
      <br />
      <Space direction="vertical">
        <h2>Input/Tooltip</h2>
        <Input
          id="username"
          placeholder="Username please"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip id="tooltip" title="Successfully hovered tooltip!">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password id="password" placeholder="Password please" />
      </Space>
    </>
  );
};

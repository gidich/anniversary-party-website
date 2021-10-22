import { FC } from "react";
import { Form, DatePicker } from "antd";
import PropTypes, { InferProps } from "prop-types";

export type ComponentProps = InferProps<typeof ComponentPropTypes>;

const ComponentPropTypes = {};

export const DatePickerComponent: FC<ComponentProps> = () => {
  return <DatePicker id="datepickercomponent" />;
};

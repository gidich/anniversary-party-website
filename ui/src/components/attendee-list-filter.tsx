import { FC } from "react";
import { Select, Input } from "antd";
import PropTypes, { InferProps } from "prop-types";

const { Option } = Select;

const ComponentPropTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

interface ComponentProp {
  filter?: string;
  onFilterChange?: (filter: string) => void;
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> &
  ComponentProp;

export const AttendeeListFilter: FC<ComponentProps> = ({
  filter = "registered",
  onFilterChange,
}) => {
  return (
    <div>
      <div id="selectAttendeeListDiv">
        <Select
          style={{width: "300px"}}
          defaultValue={filter}
          id="selectAttendeeList"
          onChange={(value) => {
            if (typeof onFilterChange != "undefined") {
              onFilterChange(value);
            }
          }}
        >
          <Option value="registered">Registered</Option>
          <Option value="notregistered">Not Registered</Option>
          <Option value="all">All</Option>
        </Select>
      </div>
      <div id="inputTextArea">
        <Input.TextArea bordered={true} size="large" showCount={true} />
      </div>
    </div>
  );
};

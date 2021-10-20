import { FC } from 'react';
import { Select } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

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
  filter = 'registered',
  onFilterChange,
}) => {
  return (
    <>
      <Select
        defaultValue={filter}
        onChange={(value) => {
          if (typeof onFilterChange != 'undefined') {
            onFilterChange(value);
          }
        }}
      >
        <Option value="registered" id="registered">
          Registered
        </Option>
        <Option value="notregistered" id="notregistered">
          Not Registered
        </Option>
        <Option value="all" id="all">
          All
        </Option>
      </Select>
    </>
  );
};

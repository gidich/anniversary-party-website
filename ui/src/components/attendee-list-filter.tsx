import { FC } from 'react';
import { Select, Button } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

const { Option } = Select;

const ComponentPropTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func
}

interface ComponentProp {
  filter?: string,
  onFilterChange?: (filter:string) => void,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const AttendeeListFilter: FC<ComponentProps> = ({
  filter = "registered",
  onFilterChange
  }) => { 
    return <>
      <Button id='button-id' onClick={() => {console.log("clicked")}} >
        button
      </Button>
      <Select 
        id="attendee-list-filter"
        defaultValue={filter}
        onChange={(value) => {if(typeof onFilterChange != 'undefined'){onFilterChange(value)}} } >
        <Option id="filter-registered" value="registered">Registered</Option>
        <Option id="filter-notregistered" value="notregistered">Not Registered</Option>
        <Option id="filter-all" value="all">All</Option>
      </Select>
    </>
}
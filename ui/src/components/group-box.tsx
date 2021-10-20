import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

let containerStyle = {
  border: '1px solid lightgrey',
  padding: '10px',
};
let titleStyle = {
  display: 'table',
  paddingLeft: '5px',
  paddingRight: '5px',
  marginTop: '-23px',
  marginLeft: '5px',
};

const GroupBoxPropTypes = {
  title: PropTypes.string.isRequired,
  titleBackground: PropTypes.string,
  titleColor: PropTypes.string,
};

export type GroupBoxProps = InferProps<typeof GroupBoxPropTypes>;

export const GroupBox: FC<GroupBoxProps> = (props) => {
  return (
    <>
      <div style={containerStyle}>
        <div
          style={Object.assign(
            {
              backgroundColor: props.titleBackground ?? 'white',
              color: props.titleColor ?? 'black',
            },
            titleStyle
          )}
        >
          <b>{props.title}</b>
        </div>
        <>{props.children}</>
      </div>
    </>
  );
};

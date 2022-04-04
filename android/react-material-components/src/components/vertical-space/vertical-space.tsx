import React from 'react';
import './vertical-space.scss';

interface params {
  size: string
}

const VerticalSpace = (props: params): React.ReactElement => {
  return (
    <div
      className={`VerticalSpace VerticalSpace--${props.size}`}
    ></div>
  );
};

export default VerticalSpace;

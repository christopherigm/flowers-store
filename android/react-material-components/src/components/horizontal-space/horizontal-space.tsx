import React from 'react';
import './horizontal-space.scss';

interface params {
  size: string
}

const HorizontalSpace = (props: params): React.ReactElement => {
  return (
    <div
      className={`HorizontalSpace HorizontalSpace--${props.size}`}
    ></div>
  );
};

export default HorizontalSpace;

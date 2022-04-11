import React from 'react';
import 'src/modules/item-price/item-price.scss';
import { GetMoneyFormat } from 'rrmc';

export const TextPriceLine = (props: any): React.ReactElement => {
  return (
    <span className={`TextItemPrice--${props.style}`}>
      {
        props.style === 'discount-off' ?
          `${props.text}% OFF` : GetMoneyFormat(props.text)
      }
    </span>
  );
};

export const TextPriceBlock = (props: any): React.ReactElement => {
  return (
    <div className={`TextItemPrice--${props.style}`}>
      {
        props.style === 'discount-off' ?
          `${props.text}% OFF` : GetMoneyFormat(props.text)
      }
    </div>
  );
};

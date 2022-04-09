import React from 'react';
import { Link } from 'react-router-dom';
import './buyable-item.scss';
import getMoneyFormat from 'src/modules/utils/money-formats';
// import GenericItemAddToFavoritesButton from 'src/modules/favorite-button/favorite-button';

interface BuyableItemInterface {
  url: string;
  backgroundImage: string;
  name: string;
  price: string;
  originalPrice?: string;
  description?: string;
  category?: string;
  categoryLink?: string;
  fullWidth?: boolean;
  mini?: boolean;
  discount?: number;
  isLoading?: boolean;
}

const BuyableItem = (props: BuyableItemInterface): React.ReactElement => {
  return (
    <div className={`BuyableItem ${props.fullWidth ? '' : 'col s12 m4'}`}>
      <div className='GenericCard'>
        <Link to={props.url} className={`BuyableItem__image-container ${props.mini ? 'BuyableItem__image-container--mini' : ''}`}>
          <div className={`BuyableItem__image ${props.mini ? 'BuyableItem__image--mini' : ''}`}
            style={{backgroundImage: `url(${props.backgroundImage})`}}>
          </div>
          {
            props.discount && !props.mini ?
              <span className='BuyableItem__discount-label right-align red darken-1 white-text z-depth-1'>
                {`${props.discount}% de descuento`}
              </span> : null
          }
          {
            props.description ?
              <span className='BuyableItem__description grey-text text-darken-4'>
                {props.description}
              </span> : null
          }
        </Link>
        <div className='BuyableItem__info'>
          {/* <GenericItemAddToFavoritesButton
            item={item}
            isLoading={props.isLoading}
            setIsLoading={props.setIsLoading} /> */}
          {
            props.category ?
              props.categoryLink ?
                <Link to={props.categoryLink} className='orange-text text-accent-4 truncate'>
                  {props.category}
                </Link> :
                <div className='orange-text text-accent-4 truncate'>
                  {props.category}
                </div> : null
          }
          <Link to={props.url} className={`BuyableItem__name ${props.mini ? 'BuyableItem__name--mini' : ''} grey-text text-darken-4 truncate`}>
            {props.name}
          </Link>
          <span className={`BuyableItem__price ${props.mini ? 'BuyableItem__price--mini' : ''} green-text text-darken-3`}>
            {getMoneyFormat(props.price)}
          </span>
          {
            props.discount ?
              <span className={`BuyableItem__discount ${props.mini ? 'BuyableItem__discount--mini' : ''} red-text text-lighten-2`}>
                {getMoneyFormat(props.originalPrice)}
              </span> : null
          }
        </div>
      </div>
    </div>
  );
};

export default BuyableItem;

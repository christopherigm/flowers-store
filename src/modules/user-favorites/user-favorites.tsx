import React, {
  useEffect
} from 'react';
import { useSelector } from 'react-redux';
import BuyableItem from 'src/modules/buyable-item/buyable-item';
import {
  SubTitle,
  HorizontalSpace
} from 'rrmc';
import LoadUserFavoriteItems from 'src/modules/user-favorites/load-user-favorite-items';

const UserFavorites = (): React.ReactElement => {
  const userData = useSelector((state: any) => state.user);
  const items = userData.favoriteItems || [];

  useEffect(() => {
    const w: any = window;
    w.scrollTo(0, 0);
  });

  return (
    <div className='col s12 m8'>
      <LoadUserFavoriteItems />
      <HorizontalSpace size='small' />
      {
        items && items.length ?
          <>
            <SubTitle
              text='Elementos favoritos'
              fullWidth={true}
              align='left' />
            <HorizontalSpace size='x-small' />
            <div className='row'>
              {
                items.map((i: any, index: number) => {
                  const item = i.relationships.product.data ? i.relationships.product.data :
                    i.relationships.service.data ? i.relationships.service.data :
                    i.relationships.meal.data ? i.relationships.meal.data :
                    i.relationships.real_estate.data ? i.relationships.real_estate.data :
                    i.relationships.vehicle.data ? i.relationships.vehicle.data : null;
                  return (
                    <div key={index} className='col s6 m4'>
                      <BuyableItem
                        item={item}
                        fullWidth={true}
                        mini={true} />
                    </div>
                  );
                })
              }
            </div>
          </> : null
      }
    </div>
  );
};

export default UserFavorites;

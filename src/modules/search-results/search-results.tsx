import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BuyableItem from 'src/modules/buyable-item/buyable-item';
import ParallaxHeaderImage from 'src/modules/parallax-header-image/parallax-header-image';
import {
  HorizontalSpace,
  SubTitle
} from 'rrmc';

const headerPictureFile = '/assets/search-bg.jpg';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const SearchResults = (props: any): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerPictureFile}`;
  const params: any = useQuery();
  const query: string = params.get('q');
  const title = `${props.results.count ? props.results.count : 0} resultado${props.results.count > 1 ? 's' : ''} para "${query}".`;

  return (
    <>
    <ParallaxHeaderImage
        image={headerPictureURL}
        gradientOpacity='0.2'
        size='x-small'
        title={title} />
    <div className='container'>
      <HorizontalSpace size='small' />
      {
        props.results && props.results.items && props.results.items.length ?
          <div className='row'>
          <HorizontalSpace size='small' />
          <SubTitle
            text={`${props.results.items.length} elemento${props.results.count > 1 ? 's' : ''}`}
            align='left'
            fullWidth={true} />
          <HorizontalSpace size='small' />
          {
            props.results.items.map((item: any, index: any ) => {
              return (
                <BuyableItem
                  key={index}
                  item={item} />
              );
            })
          }
          </div> : null
      }
    </div>
    <HorizontalSpace size='medium' />
    </>
  );
};

export default SearchResults;

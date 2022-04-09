import React, {
  useEffect,
  useState
} from 'react';
import fetchData from 'src/modules/utils/fetch-data';
import {
  SubTitle,
  HorizontalSpace
} from 'rrmc';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import BuyableItem from 'src/modules/buyable-item/buyable-item';
import SetSystemData from 'src/redux/actions/set-system-data';

const HighlightedProductsItem = (props: any): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const item: any = props.item;
  const url = `/${item.relationships.classification.data.attributes.slug}/${item.attributes.slug}`;

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      <BuyableItem
        url={url}
        backgroundImage={item.attributes.img_picture}
        name={item.attributes.name}
        price={item.attributes.final_price}
        originalPrice={item.attributes.price}
        isLoading={isLoading}
        discount={item.attributes.discount}
        category={item.relationships.classification.data.attributes.name}
        categoryLink={`/${item.relationships.classification.data.attributes.slug}`}
        description={item.attributes.short_description} />
    </>
  );
};

const HighlightedProducts = (): React.ReactElement => {
  const dispatch = useDispatch();
  const system: any = useSelector((state: any) => state.system);
  const items = system && system.highlightedProducts ? system.highlightedProducts : [];
  const url = 'products/?include=classification';

  useEffect(() => {
    fetchData(url)
      .then((response: any) =>{
        dispatch(SetSystemData({
          highlightedProducts: response.data
        }));
      });
  }, [fetchData]);

  return (
    <>
    <HorizontalSpace size='medium' />
    <SubTitle text='Destacados del mes' />
    <HorizontalSpace size='x-small' />
    <div className='HighlightedProducts'>
      <div className='container'>
        <div className='row'>
          {
            items && items.length ?
              items.map((i: any, index: number) => {
                return i && i.id ? <HighlightedProductsItem item={i} key={index} /> : null;
              }) : null
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default HighlightedProducts;

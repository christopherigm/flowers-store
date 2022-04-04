import React, {
  useEffect,
  useState
} from 'react';
import { useSelector } from 'react-redux';
import fetchData from 'src/modules/utils/fetch-data';
import ParallaxHeaderImage from 'src/modules/parallax-header-image/parallax-header-image';
import { HorizontalSpace } from 'rrmc';

const headerPictureFile = '/assets/digital-services.jpg';

const CategoriesGrid = ( props: any ): React.ReactElement => {
  const [items, setitems]: any = useState([]);
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerPictureFile}`;

  useEffect(() => {
    fetchData('groups/?fields[Group]=name,img_picture,slug&page[size]=20')
      .then((response: any) =>{
        setitems(response);
      });
  }, [fetchData]);

  return (
    <>
      <ParallaxHeaderImage
        image={headerPictureURL}
        size='x-small'
        title='Categorías' />
      <HorizontalSpace size='small' />
      <div className='container'>
        <div className='row'>
          {
            items && items.data && items.data.length ?
              items.data.map((item: any, index: number) => {
                return (
                  <></>
                );
              }) : null
          }
        </div>
      </div>
    </>
  );
};

export default CategoriesGrid;
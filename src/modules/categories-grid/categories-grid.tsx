import React, {
  useEffect
} from 'react';
import fetchData from 'src/components/utils/fetch-data';
import {
  SubTitle,
  HorizontalSpace
} from 'rrmc';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import CategoryItem from 'src/modules/categories-grid/category-item';
import 'src/modules/categories-grid/categories-grid.scss';
import SetSystemData from 'src/redux/actions/set-system-data';

const CategoriesGrid = (): React.ReactElement => {
  const dispatch = useDispatch();
  const system: any = useSelector((state: any) => state.system);
  const items = system && system.categories ? system.categories : [];

  useEffect(() => {
    fetchData('product-classifications/')
      .then((response: any) =>{
        dispatch(SetSystemData({
          categories: response.data
        }));
      });
  }, [fetchData]);

  return (
    <>
    <HorizontalSpace size='medium' />
    <div className='CategoriesGrid'>
      <div className='CategoriesGrid__header-background pink darken-2'></div>
      <HorizontalSpace size='x-small' />
      <SubTitle text='Categorias' color='white' shadow={true} />
      <HorizontalSpace size='xx-small' />
      <div className='container CategoriesGrid__grid'>
        <div className='row'>
          {
            items && items.length ?
              items.map((i: any, index: number) => {
                return <CategoryItem item={i} key={index} />;
              }) : null
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoriesGrid;

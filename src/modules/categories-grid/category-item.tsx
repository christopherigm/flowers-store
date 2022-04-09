import React from 'react';
import {
  StrongText
} from 'rrmc';
import { Link } from 'react-router-dom';
import 'src/modules/categories-grid/category-item.scss';

const CategoryItem = (props: any): React.ReactElement => {
  const color = props.item.attributes.color;
  const icon = props.item.attributes.icon;
  const href = props.expoId ?
    `/expos/${props.expoId}/${props.item.attributes.slug}` :
    `/categorias/${props.item.attributes.slug}`;

  return (
    <div className='CategoryItem col s12 m4 l3'>
      <Link to={href} className='GenericCard hoverable'>
        <div
          className='CategoryItem__img'
          style={{backgroundImage: `url(${props.item.attributes.img_picture})`}}>
          {
            icon ? <>
              <div className='CategoryItem__icon center white'>
                <i className='center material-icons'
                  style={{color: `${color}`}}>{props.item.attributes.icon}</i>
              </div>
            </> : null
          }
        </div>
        <StrongText text={props.item.attributes.name} fullWidth={true} />
      </Link>
    </div>
  );
};

export default CategoryItem;

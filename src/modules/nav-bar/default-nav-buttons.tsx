import React, {
  useEffect
} from 'react';
import { useSelector } from 'react-redux';

const DefaultNavButtons = (props: any): React.ReactElement => {
  const system: any = useSelector((state: any) => state.system);
  const items = system.categories || [];

  useEffect(() => {
    const menu: any[] = [];
    menu.push({
      to: '/',
      text: 'Inicio',
      rightLine: true
    });
    items.forEach((i: any) => {
      menu.push({
        to: `/${i.attributes.slug}`,
        text: i.attributes.name
      });
    });
    props.setSectionMenu(menu);
  }, [props.setSectionMenu]);
  return (<></>);
};

export default DefaultNavButtons;


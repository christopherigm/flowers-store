import React, {
  useEffect
} from 'react';

const DefaultNavButtons = (props: any): React.ReactElement => {
  useEffect(() => {
    const menu: any[] = [];
    menu.push({
      to: '/',
      text: 'Inicio',
      rightLine: true
    });
    props.setSectionMenu(menu);
  }, [props.setSectionMenu]);
  return (<></>);
};

export default DefaultNavButtons;


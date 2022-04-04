import React, {
  useState,
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import DefaultNavButtons from 'src/modules/nav-bar/default-nav-buttons';
import Footer from 'src/modules/footer/footer';
import { HorizontalSpace } from 'rrmc';
import SetGlobalAlertDialog from 'src/redux/actions/set-global-alert-dialog';
import UserAccountMenu from 'src/modules/user-account-menu/user-account-menu';
import UserFavorites from 'src/modules/user-favorites/user-favorites';
import UserCart from 'src/modules/user-cart/user-cart';
import UserAccountConfigurations from 'src/modules/user-account-configurations/user-account-configurations';
import UserAddress from 'src/modules/user-address/user-address';

const UserAccountPage = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  const user = userData && userData.user && userData.user.id ? userData.user : null;
  const pathname = window.location.pathname || '';

  useEffect(() => {
    if ( !user || !user.id ) {
      dispatch(SetGlobalAlertDialog({
        active: true,
        dialog: 'missingLogin'
      }));
    }
  });

  return (
    <>
    {
      !user || !user.id ?
      <>
        <NavBar sectionMenu={sectionMenu} />
        <DefaultNavButtons setSectionMenu={setSectionMenu} />
        <HorizontalSpace size='medium' />
        Por favor inicie sesion
        <HorizontalSpace size='medium' />
        <Footer />
        <SystemCheck />
      </> :
      <>
        <NavBar sectionMenu={sectionMenu} />
        <DefaultNavButtons setSectionMenu={setSectionMenu} />
        <HorizontalSpace size='medium' />
        <div className='container row UserAccount'>
          <UserAccountMenu />
          <div className='col s12 m1 hide-on-med-and-down'></div>
          { pathname === '/mi-cuenta/favoritos' ? <UserFavorites /> : null }
          { pathname === '/mi-cuenta/carrito' ? <UserCart /> : null }
          { pathname === '/mi-cuenta/configuracion' ? <UserAccountConfigurations /> : null }
          { pathname === '/mi-cuenta/direcciones' ? <UserAddress /> : null }
        </div>
        <Footer />
        <SystemCheck />
      </>
    }
    </>
  );
};

export default UserAccountPage;
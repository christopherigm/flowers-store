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
import UserAccountConfigurations from 'src/modules/user-account-configurations/user-account-configurations';

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
      <div className='page'>
        <NavBar sectionMenu={sectionMenu} />
        <DefaultNavButtons setSectionMenu={setSectionMenu} />
        <HorizontalSpace size='medium' />
        Por favor inicie sesion
        <HorizontalSpace size='medium' />
        <Footer />
        <SystemCheck />
      </div> :
      <div className='page'>
        <NavBar sectionMenu={sectionMenu} />
        <DefaultNavButtons setSectionMenu={setSectionMenu} />
        <HorizontalSpace size='medium' />
        <div className='container row UserAccount'>
          <UserAccountMenu />
          <div className='col s12 m1 hide-on-med-and-down'></div>
          { pathname === '/mi-cuenta/configuracion' ? <UserAccountConfigurations /> : null }
        </div>
        <Footer />
        <SystemCheck />
      </div>
    }
    </>
  );
};

export default UserAccountPage;

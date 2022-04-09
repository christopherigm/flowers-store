/* eslint-disable max-lines-per-function */
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from 'src/pages/home/home';
import About from 'src/pages/about/about';
import ActivateUser from 'src/pages/activate-user/activate-user';
import ChangeLogPage from 'src/pages/changelog/changelog';
import CreateAccount from 'src/pages/create-account/create-account';
import LoginUser from 'src/pages/login/login';
import {
  TermsAndConditions,
  PrivacyPolicy,
  UserData
} from 'src/pages/terms-and-conditions/terms-and-conditions';
import UserAccountPage from 'src/pages/user-account/user-account';

const AppRoutes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mi-cuenta/vehiculos' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/inmuebles' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/platillos' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/servicios' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/productos' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/ventas' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/empresas' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/favoritos' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/ordenes' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/carrito' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/pagos' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/direcciones' element={<UserAccountPage />} />
        <Route path='/mi-cuenta/configuracion' element={<UserAccountPage />} />
        <Route path='/mi-cuenta' element={<UserAccountPage />} />
        <Route path='/activate/:token' element={<ActivateUser />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/changelog' element={<ChangeLogPage />} />
        <Route path='/terminos-y-condiciones' element={<TermsAndConditions />} />
        <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
        <Route path='/uso-de-datos-de-usuario' element={<UserData />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

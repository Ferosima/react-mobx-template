import React from 'react';
import { Routes } from 'react-router-dom';
import { Route, useLocation } from 'react-router-dom';
import LandingScreen from './screens/LandingScreen';
import AuthScreen from './screens/AuthScreen';
import { SCREENS } from 'src/common/constants/screens';
import NoMatchScreen from './screens/NoMatchScreen';
import { PrivateComponent } from './components/PrivateComponent';
import AppScreen from './screens/AppScreen';

type Props = {};

const Router = (props: Props) => {
  let location = useLocation();
  return (
    <div className="router-wrapper">
      <Routes location={location}>
        {/* Landing */}
        <Route path={SCREENS.LANDING()} element={<LandingScreen />} />

        {/* Auth */}
        <Route path={SCREENS.AUTH()} element={<AuthScreen />} />

        {/* Private Routes */}
        <Route element={<PrivateComponent />}>
          {/* Application */}
          <Route path={SCREENS.APP()} element={<AppScreen />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NoMatchScreen />} />
      </Routes>
    </div>
  );
};

export default Router;

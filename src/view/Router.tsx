import React from 'react';
import { Routes } from 'react-router-dom';
import { Route, useLocation } from 'react-router-dom';
import LandingScreen from './screens/LandingScreen';
import AuthScreen from './screens/AuthScreen';
import { SCREENS } from 'src/common/constants/screens';
import NoMatchScreen from './screens/NoMatchScreen';
import { RequireAuth } from './components/RequireAuth';

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
        <Route element={<RequireAuth />}>
          {/* Application */}
          <Route path={SCREENS.APP()} element={<LandingScreen />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NoMatchScreen />} />
      </Routes>
    </div>
  );
};

export default Router;

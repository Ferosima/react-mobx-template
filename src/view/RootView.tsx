import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'src/common/services/history';
import Router from './Router';

type Props = {};

const RootView = (props: Props) => {
  return (
    <HistoryRouter history={history}>
      <Router />
    </HistoryRouter>
  );
};

export default RootView;

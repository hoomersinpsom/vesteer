import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import appConfig from './../../config/application.config';
import HomeView from 'src/views/home';
import AppLayout from 'src/views/layout';
import NotFoundView from 'src/views/errors/NotFound';

const history = useRouterHistory(createHistory)({
  basename: appConfig.path,
});

export default (
  <Router history={history}>
	  <Route component={AppLayout}>
	    <Route path="/" component={HomeView} />
	    <Route path="*" component={NotFoundView} />
	  </Route>
  </Router>
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Comments from '../pages/Comments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/posts/:id/comments" component={Comments} />
  </Switch>
);

export default Routes;

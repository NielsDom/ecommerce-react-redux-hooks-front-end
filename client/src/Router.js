import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'


const Loading = () => <div style={{height: '1000px'}}></div>;

const Home = Loadable({
  loader: () => import('./containers/HomeContainer'),
  loading: Loading
})

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
);

export default Router;
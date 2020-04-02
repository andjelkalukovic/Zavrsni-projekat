import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoutes from './layout/private/PrivateRoutes';
import Home from './layout/private/components/HomeComponent';
import PublicRoutes from './layout/public/PublicRoutes';
import Login from './layout/public/components/Login';
import Register from './layout/public/components/Register';
import Header from './layout/public/components/Header';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<div>
    <Header/>
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={Login} path='/login' />
        <PublicRoutes component={Register} path='/register'/>
        <PrivateRoutes component={Home} path='/home'/>
        <Redirect from='/' to='/login' />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
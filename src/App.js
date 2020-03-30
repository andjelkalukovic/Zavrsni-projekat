import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoutes from './layout/private/PrivateRoutes';
import Home from './layout/private/components/HomeComponent';
import PublicRoutes from './layout/public/PublicRoutes';
import Login from './layout/public/components/Login';
import Register from './layout/public/components/Register';


function App() {
  return (<div>
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={Login} path='/login' />
        <PrivateRoutes component={Home} path='/home'/>
        <Login component={Register} path='/register'/>
        <Redirect from='/' to='home' />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
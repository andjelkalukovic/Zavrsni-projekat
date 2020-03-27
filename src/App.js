import React, { useState, useEffect } from 'react';
import './App.css';
//import CocktailList from './components/CocktailList';
import { getAllCocktails } from './service/apiService';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './layout/private/PrivateRoutes';
import Home from './layout/private/components/HomeComponent';
import PublicRoutes from './layout/public/PublicRoutes';
import Login from './layout/public/components/Login';
import Cocktail from './components/Cocktail';

function App() {
const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getAllCocktails().then(response => {
      console.log(response.data);
      setDrinks(response.data);
    });
  }, [])

  return (<>
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={Login} path='/login'/>
        <PrivateRoutes component={Home} path='/home'/>
        <Redirect from='/' to='home' />
      </Switch>
    </BrowserRouter>
    <div>
      <Cocktail drink={drinks}/>
    </div>
    </>
  );
}

export default App;

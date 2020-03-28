import React from 'react';
import './App.css';
//import CocktailList from './components/CocktailList';
// import { getAllCocktails } from './service/apiService';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './layout/private/PrivateRoutes';
import Home from './layout/private/components/HomeComponent';
import PublicRoutes from './layout/public/PublicRoutes';
import Login from './layout/public/components/Login';
// import Cocktail from './components/Cocktail';
// import Axios from 'axios';
import ReceptiList from './Recepti/ReceptiTest';

function App() {
//   const API_ID = 'bc7a9ea8'
//   const API_KEY='aeeb79e4ea32cf8eb4687aee4313b164'
//   const example=`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
// const [drinks, setDrinks] = useState([]);

//   useEffect(() => {
// getRecipe()
    // getAllCocktails().then(response => {
    //   console.log(response.data);
    //   setDrinks(response.data);
//   }, [])
// const getRecipe=()=>{
//   Axios.get(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`)
//             //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

//     .then(response => setDrinks(response.data.hits))
// }
// console.log (drinks)
  return (<>
  <ReceptiList/>
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={Login} path='/login'/>
        <PrivateRoutes component={Home} path='/home'/>
        <Redirect from='/' to='home' />
      </Switch>
    </BrowserRouter>
    <div>
      {/* <Cocktail drink={drinks}/> */}
    </div>
    </>
  );
}

export default App;

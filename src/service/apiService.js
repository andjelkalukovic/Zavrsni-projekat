import axios from 'axios'

// const proxyurl = "https://cors-anywhere.herokuapp.com/"
const getAllCocktails = async () =>{
    return await axios.get (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
}
export {getAllCocktails};
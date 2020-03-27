import React from 'react'

const Cocktail = ({drink}) =>{
    let {strDrink}=drink;
    return(<div>
        <p>{strDrink}</p>
    </div>
    )
}
export default Cocktail;

//, strAlcoholic, strGlass, strDrinkThumb
{/* <p>{strAlcoholic}</p>
        <p>{strGlass}</p>
        <p>{strDrinkThumb}</p> */}
import React from 'react';

// const Select = ({handleChange, balanced, highProtein, 
//     highFiber, lowFat, lowCarb, lowSodium}) => {
//     return(
//         <div>
//          <select onChange={(e) => handleChange(e)}>
//             <option value={balanced}>Balanced</option>
//             <option value={highProtein}>High-protein</option>
//             <option value={highFiber}>High-fiber</option>   
//             <option value={lowFat}>Low-fat</option>   
//             <option value={lowCarb}>Low-Carb</option>   
//             <option value={lowSodium}>Low-sodium</option>   
//          </select>   
//         </div>
//     )
// }
const Select = ({handleChange, label, options})=>{
return(
    <select label={label} onChange={handleChange}>
        {options.map(option => (<option value={option}></option>))}
    </select>
)
}

export default Select;
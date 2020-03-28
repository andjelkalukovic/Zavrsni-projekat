import React from 'react';

const Select = ({handleChange, id, options})=>{
return(
    <select id={id} onChange={handleChange}>
        {options.map(option => (<option value={option}></option>))}
    </select>
)
}

export default Select;
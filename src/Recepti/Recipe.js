import React from 'react'

const Recipe=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Calorie: {props.calories}</p>
            <a href={props.url}>
            <img src={props.image} alt={props.title}/> </a>
        </div>
    )
}
export default Recipe;
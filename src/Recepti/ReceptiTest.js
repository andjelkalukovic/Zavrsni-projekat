import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'

const ReceptiList = () => {
    const [query, setQuery]=useState('chicken')

    const API_ID = 'bc7a9ea8'
    const API_KEY = 'aeeb79e4ea32cf8eb4687aee4313b164'
    const example = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

    const [recipe,setRecipe]=useState([])
    const [search,setSearch]=useState('')

    useEffect(()=>{
        getRecipe() // eslint-disable-next-line
    },[query])

    const getRecipe=()=>{
        Axios.get(`${example}`)      
          .then(response => setRecipe(response.data.hits))
      }
    const getSearch=(e)=>{
        setSearch(e.target.value)
    }
    const updateChange=(e)=>{
        e.preventDefault();
        setQuery(search)
        setSearch('')
    }
    console.log (recipe);
      return (
          <div>
              <form onSubmit={updateChange}>
                  <input value={search}
                  type='text'
                  onChange={getSearch}/>
                  <button type='submit'>Search</button>
              </form>
             {recipe.map(el=><Recipe 
             key={el.recipe.label}
             title={el.recipe.label} 
             calories={el.recipe.calories}
             image={el.recipe.image}
             url={el.recipe.url}/>)} 
          </div>
      )
}
export default ReceptiList;
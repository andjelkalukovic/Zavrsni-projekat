import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
//import SelectWrap from './SelectWrap'
import Button from './Button'

const ReceptiList = () => {
    const [query, setQuery] = useState('coconut')

    const API_ID = 'bc7a9ea8'
    const API_KEY = 'aeeb79e4ea32cf8eb4687aee4313b164'
    const example = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('')
    const [options, setOptions] = useState([])
    const [selected, setSelected]= useState ('all')

    useEffect(() => {
        getRecipe() // eslint-disable-next-line
    }, [query])

    const getRecipe = () => {
        Axios.get(`${example}`)
            .then(response => {
                setRecipe(response.data.hits)
                getOptions(response.data.hits)
            })
    }
    const getSearch = (e) => {
        setSearch(e.target.value)
    }
    const updateChange = (e) => {
        e.preventDefault();
        setQuery(search)
        setSearch('')
        setSelected('all')
    }
    const getOptions=(rec)=>{
        let tmp=['all']
        rec.forEach((el)=> {
            const {dietLabels}=el.recipe;
                if ( !tmp.includes(dietLabels[0]) && dietLabels.length > 0) {
                     tmp.push(dietLabels[0])}
                 })
        setOptions(tmp)
    }

    console.log(recipe);
    return (
        <div>
            <form onSubmit={updateChange}>
                <input value={search}
                    type='text'
                    onChange={getSearch} />
                <button type='submit'>Search</button>
                {/* <SelectWrap recipe={recipe} /> */}
                <select onChange = {(e)=>{setSelected(e.target.value)}}>
                    {options.map((el)=>{return (<option value={el} key={el}>{el}</option>)})}
                </select>
            </form>
           <div> 
           {recipe.map(el => {
               if (el.recipe.dietLabels[0]===selected || selected === "all"){
                    return(
                        <Recipe
                            key={el.recipe.label}
                            title={el.recipe.label}
                            ingredientLines={el.recipe.ingredientLines}
                            image={el.recipe.image}
                            dietLabels={el.recipe.dietLabels}
                            url={el.recipe.url} />)
                    }
                else{
                    return null;    
                }

                })}
            
            
                </div>
                
                <div>
                <Button/>
                </div>
        </div>
    )
}
export default ReceptiList;
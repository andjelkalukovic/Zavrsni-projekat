import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import Button from './Button'
import './RecipeList.css'

const ReceptiList = () => {
    const [query, setQuery] = useState('Popular')
    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('')
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState('All')

    const API_ID = 'bc7a9ea8'
    const API_KEY = 'aeeb79e4ea32cf8eb4687aee4313b164'
    const getAllRecipes = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`


    useEffect(() => {
        getRecipe() // eslint-disable-next-line
    }, [query])

    const getRecipe = () => {
        Axios.get(`${getAllRecipes}`)
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
        setSelected('All')
    }
    const getOptions = (rec) => {
        let tmp = ['All']
        rec.forEach((el) => {
            const { dietLabels } = el.recipe;
            if (!tmp.includes(dietLabels[0]) && dietLabels.length > 0) {
                tmp.push(dietLabels[0])
            }
        })
        setOptions(tmp)
    }

    console.log(recipe);
    return (
        <div className='recipe-list'>
            <form onSubmit={updateChange}>
                <input value={search}
                    placeholder='Find your favourite recipe'
                    type='text'
                    onChange={getSearch} />
                <button type='submit'>Search</button>
            </form>
            <div>
                <p>If you are looking for the recipes with specific diet preferences, you can select it here.</p>
                <select onChange={(e) => { setSelected(e.target.value) }} >
                    {options.map((el) => { return (<option value={el} key={el}>{el}</option>) })}
                </select>
            </div>

            <h1>{query.charAt(0).toUpperCase() + query.slice(1)} recipes</h1>

            <div>
                {recipe.map(el => {
                    if (el.recipe.dietLabels[0] === selected || selected === "All") {
                        return (
                            <Recipe
                                key={el.recipe.label}
                                title={el.recipe.label}
                                ingredientLines={el.recipe.ingredientLines}
                                image={el.recipe.image}
                                dietLabels={el.recipe.dietLabels}
                                url={el.recipe.url}
                                calories={el.recipe.calories} />)
                    }
                    else {
                        return null;
                    }
                })}
            </div>

            <div>
                <Button />
            </div>
        </div>
    )
}
export default ReceptiList;
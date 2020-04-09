import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import Button from './Button'
import './RecipeList.css'
import {API_ID, API_KEY} from './apiKey'

const ReceptiList = () => {
    const [query, setQuery] = useState('Popular')
    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('')
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState('All')
    const [options2, setOptions2] = useState([])
    const [selected2, setSelected2] = useState('All')

    const getAllRecipes = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`


    useEffect(() => {
        getRecipe() // eslint-disable-next-line
    }, [query])

    const getRecipe = () => {
        Axios.get(`${getAllRecipes}`)
            .then(response => {
                setRecipe(response.data.hits)
                getOptions(response.data.hits)
                getOptions2(response.data.hits)
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
        setOptions([])
        setSelected2('All')
        setOptions2([])
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
    const getOptions2 = (rece) => {
        let tempo = ['All']
        rece.forEach((el) => {
            const { healthLabels } = el.recipe;
            if (!tempo.includes(healthLabels[0]) && healthLabels.length > 0) {
                tempo.push(healthLabels[0])
            }
        })
        setOptions2(tempo)
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

            <div className='row justify-content-center'>
                <p className='col-4'>If you are looking for the recipes with specific 
                diet or health labels, you can select it here.</p>
            </div>
            <div className='row justify-content-center'>
                <h5 className='col-3'>Diet labels</h5>
                <h5 className='col-3'>Health labels</h5>
            </div>

            <div className='row justify-content-center'>
                <select className='col-3' onChange={(e) => { setSelected(e.target.value) }} >
                    {options.map((el) => { return (<option value={el} key={el}>{el}</option>) })}
                </select>
                <select className='col-3' onChange={(e) => { setSelected2(e.target.value) }} >
                    {options2.map((el) => { return (<option value={el} key={el}>{el}</option>) })}
                </select>
            </div>

            <h1> <b> <em>{query.charAt(0).toUpperCase() + query.slice(1)} recipes </em></b></h1>

            <div>
                {recipe.map(el => {
                    if ((el.recipe.healthLabels[0] === selected2 || selected2 === "All") 
                    && (el.recipe.dietLabels[0] === selected || selected === "All")) {
                        return (
                            <Recipe
                                key={el.recipe.label}
                                title={el.recipe.label}
                                ingredientLines={el.recipe.ingredientLines}
                                image={el.recipe.image}
                                dietLabels={el.recipe.dietLabels}
                                url={el.recipe.url}
                                calories={el.recipe.calories} 
                                healthLabels={el.recipe.healthLabels}/>)
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
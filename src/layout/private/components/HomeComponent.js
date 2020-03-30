import React from 'react'
import ReceptiList from '../../../Recepti/RecipeList'

const Home = ()=>{
    const styles={
        backgroundColor:'#376E67',
        color: 'white'
    }
    return(
        <>
        <ReceptiList/>
        <h1 style={styles}>Home page</h1>
        </>
    )
}
export default Home;
import React from 'react'
import ReceptiList from './Recepti/RecipeList'
import Logout from './LogOut'

const Home = ()=>{
    return(
        <>
        <Logout/>
        <ReceptiList/>
        </>
    )
}
export default Home;
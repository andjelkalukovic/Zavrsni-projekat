import React from 'react'
import ReceptiList from './Recepti/RecipeList'
import Logout from './LogOut'
import User from './User'

const Home = ()=>{
    return(
        <>
        <div>
        <User/>
        <Logout/>
        </div>
        <ReceptiList/>
        </>
    )
}
export default Home;
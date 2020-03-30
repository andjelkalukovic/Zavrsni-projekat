import axios from 'axios'

const url=`https://coetus.herokuapp.com/api/users`;

const postUser = async (username, password)=>{
    return await axios.post(`${url}`,{username,password})
}
const putUser= async(user)=>{
    return await axios.put(`${url}`,user)
}
export {postUser, putUser}

// const API_ID = 'bc7a9ea8'
//     const API_KEY = 'aeeb79e4ea32cf8eb4687aee4313b164'
//     let query='Popular'
//     const getAllRecipes = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

// export default getAllRecipes;
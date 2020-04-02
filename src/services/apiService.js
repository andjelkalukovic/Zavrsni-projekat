import axios from 'axios'
import { authHeader } from './authService';

const url=`https://coetus.herokuapp.com/api/users`;

const getAllUsers = async() => {
    return await axios.get(`${url}`)
}
const postUser = async (username, password)=>{
    return await axios.post(`${url}`,{username,password})
}
const putUser= async(user)=>{
    return await axios.put(`${url}`,user, {headers: authHeader()})
}
const getUserId = async(user_id) => {
    return await axios.get(`${url}/${user_id}`)
}
export {postUser, putUser, getUserId, getAllUsers}
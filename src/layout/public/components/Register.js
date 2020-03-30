import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { putUser, postUser } from '../../../services/apiService'
import { setToken } from '../../../services/authService'

const Register = ()=>{
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [userName, setUserName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [passwordDva, setPasswordDva]=useState('')

    const history=useHistory();

    let user ={
        firstName:firstName,
        lastName:lastName,
        userName:userName,
        email:email,
        password:password,
    }

    const handleSubmit =()=>{
        if (password===passwordDva){
            putUser(user).then(()=>{
                postUser(userName, password).then(res=>{
                    setToken(res.data.token);
                    history.push('home');
                })
            })
        }
        else {
            alert ('Wrong password')
        }
    }
    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            handleSubmit() }}>

            <input type='text'
            placeholder='First name'
            onInput={e => {
                setFirstName(e.target.value)
            }}/>
            <br/>

            <input type='text'
            placeholder='Last name'
            onInput={e => {
                setLastName(e.target.value)
            }}/>
            <br/>

            <input type='text'
            placeholder='Username'
            onInput={e => {
                setUserName(e.target.value)
            }}/>
            <br/>

            <input type='text'
            placeholder='Email'
            onInput={e => {
                setEmail(e.target.value)
            }}/>
            <br/>

            <input type='text'
            placeholder='Password'
            onInput={e => {
                setPassword(e.target.value)
            }}/>
            <br/>

            <input type='text'
            placeholder='Confirm password'
            onInput={e => {
                setPasswordDva(e.target.value)
            }}/>
            <br/>

            <input type='submit'
            value='Sign Up'/>

            </form>

    )
}
export default Register;
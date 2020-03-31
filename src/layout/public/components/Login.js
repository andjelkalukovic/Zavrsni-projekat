import React, { useState } from 'react'
import { postUser } from '../../../services/apiService'
import { useHistory, Link } from 'react-router-dom'
import { setToken } from '../../../services/authService'
import Pictures from './Pictures'
import '../../../index.css'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleLogin = () => {
        postUser(username, password).then((res) => {
            console.log(res)
            setToken(res.data.token)
            history.push('home')
        }).catch('something wrong')
    }
    return (
        <div className='login'>
            <h2> <em>Welcome to Food for ReBoot!</em> </h2>
            <Pictures/>
            <h3> We order recipes by their cookability and quality
                so you can always count on getting the best recipes! Our search algorithm returns
                the most relevant recipes from the most popular and best recipes sources on the web.
                Please log in for all recepies.</h3>
                <div clasName='loginbox'>
                    <h3>Sign in here</h3>
            <form onSubmit={e => {
                e.preventDefault();
                handleLogin(e)
            }}>
                    <p>Username</p>
                <input type='text'
                    placeholder='Enter username'
                    onInput={e => {
                        e.preventDefault();
                        setUsername(e.target.value)
                    }} />
                <br />
                    <p>Password</p>
                <input type='password'
                    placeholder='Enter password'
                    onInput={e => {
                        e.preventDefault();
                        setPassword(e.target.value)
                    }} />
                <br />
                <input type='submit' value='Sign In' />
            </form>
            <div>
                <p>Don't have an account? Please <Link to="/register">create it</Link> here.</p>
                <p>Yup, it is free!</p>
            </div>
            </div>
        </div>
    )
}
export default Login;
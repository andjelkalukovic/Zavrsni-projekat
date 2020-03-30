import React, { useState } from 'react'
import { postUser } from '../../../services/apiService'
import { BrowserRouter, Switch, Route, useHistory, Link } from 'react-router-dom'
import { setToken } from '../../../services/authService'
import Register from './Register'

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
        <div>
            <p>Welcome to Food for ReBoot! We order recipes by their cookability and quality
                so you can always count on getting the best recipes! Our search algorithm returns
                the most relevant recipes from the most popular and best recipes sources on the web.
                Please log in for all recepies.</p>
            <form onSubmit={e => {
                e.preventDefault();
                handleLogin(e)
            }}>

                <input type='text'
                    placeholder='username'
                    onInput={e => {
                        e.preventDefault();
                        setUsername(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='password'
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
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/register"> <Register />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Login;
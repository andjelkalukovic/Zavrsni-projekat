import React, { useState } from 'react'
import { postUser } from '../../../services/apiService'
import { useHistory, Link } from 'react-router-dom'
import { setToken, setId } from '../../../services/authService'
import Pictures from './Pictures'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleLogin = () => {
        postUser(username, password).then((res) => {
            if(res.data.success){
            setToken(res.data.token)
            setId(res.data.user.user_id)
            history.push('home')
        } else {
            alert('Something wrong. Try again')
        }
        }).catch(err=>alert('Wrong username or password'))
    }
    return (
        <div className='container'>
            <h2> <em>Welcome to Food for ReBoot!</em> </h2>
            <div className='row'>
                <Pictures className='col-md-4 col-sm-8' />

                <div className='col-md-4 col-sm-2'>
                    <h3> We order recipes by their cookability and quality
                        so you can always count on getting the best recipes!
                        Our search algorithm returns the most relevant recipes
                        from the most popular and best recipes sources on the web.
                Please log in for all recepies.</h3>
                </div>

                <div className='col-md-4 col-sm-2'>
                    <div className='loginbox'>
                        <h3>Sign in here</h3>
                        <form onSubmit={e => {
                            e.preventDefault();
                            handleLogin(e)
                        }}>
                            <p>Username</p>
                            <input type='text'
                                required
                                placeholder='Enter username'
                                onInput={e => {
                                    e.preventDefault();
                                    setUsername(e.target.value)
                                }} />
                            <br />
                            <p>Password</p>
                            <input type='password'
                                required
                                placeholder='Enter password'
                                onInput={e => {
                                    e.preventDefault();
                                    setPassword(e.target.value)
                                }} />
                            <br />
                            <input type='submit' value='Sign In' />
                        </form>
                        <div>
                            <p>Don't have an account? <br /> Please <Link to="/register">create it</Link> here.</p>
                            <p>Yup, it is free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
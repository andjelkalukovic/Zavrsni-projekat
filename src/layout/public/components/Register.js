import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { putUser, postUser } from '../../../services/apiService'
import { setToken } from '../../../services/authService'
import './Register.css'
import src from './pngguru.com.png'

const Register = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordDva, setPasswordDva] = useState('')

    const history = useHistory();

    let user = {
        name: name,
        surname: surname,
        username: username,
        email: email,
        password: password,
    }

    const handleSubmit = () => {
        if (password === passwordDva) {
            putUser(user).then(() => {
                postUser(username, password).then(res => {
                    setToken(res.data.token)
                    history.push('home');
                })
            })
        }
        else {
            alert('Wrong password')
        }
    }
   
    return (
        <div className="position-relative">
            <div className='register'>
                <img src={src} alt='avatar' className='avatar'/> 
                <h3>Registration</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('registracija')
                    handleSubmit()
                }}>
                    <p>First name</p>
                    <input type='text'
                        placeholder='Enter first name'
                        required
                        onInput={e => {
                            setName(e.target.value)
                        }} />
                    <br />
                    <p>Last name</p>
                    <input className='p-1' type='text'
                        placeholder='Enter last name'
                        required
                        onInput={e => {
                            setSurname(e.target.value)
                        }} />
                    <br />

                    <p>Username</p>
                    <input type='text'
                        placeholder='Enter username'
                        required
                        onInput={e => {
                            setUsername(e.target.value)
                        }} />
                    <br />

                    <p>E-mail</p>
                    <input type='email'
                        placeholder='Enter e-mail'
                        required
                        onInput={e => {
                            setEmail(e.target.value)
                        }} />
                    <br />

                    <p>Password</p>
                    <input type='password'
                        placeholder='Enter password'
                        required
                        onInput={e => {
                            setPassword(e.target.value)
                        }} />
                    <br />

                    <p>Confirm password</p>
                    <input type='password'
                        placeholder='Confirm password'
                        required
                        onInput={e => {
                            setPasswordDva(e.target.value)
                        }} />
                    <br />

                    <input type='submit'
                        value='Sign Up' />
                </form>
                <div>
                            <p>Already have an account? <br/> Please <Link to="/login">login here</Link>.</p>
                        </div>
            </div>
        </div>

    )
}
export default Register;
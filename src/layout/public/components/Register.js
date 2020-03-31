import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { putUser, postUser } from '../../../services/apiService'
import { setToken } from '../../../services/authService'

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
        <div className='register'>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('registracija')
                handleSubmit()
            }}>

                <input type='text'
                    placeholder='First name'
                    required
                    onInput={e => {
                        setName(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='Last name'
                    required
                    onInput={e => {
                        setSurname(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='username'
                    required
                    onInput={e => {
                        setUsername(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='Email'
                    required
                    onInput={e => {
                        setEmail(e.target.value)
                    }} />
                <br />

                <input type='password'
                    placeholder='Password'
                    required
                    onInput={e => {
                        setPassword(e.target.value)
                    }} />
                <br />

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
        </div>

    )
}
export default Register;
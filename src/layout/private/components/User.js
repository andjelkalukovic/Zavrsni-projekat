import React, { useState, useEffect } from 'react'
import { getUserId } from '../../../services/apiService'
import src from './pngguruChef.com.png'

const User = () => {
    const [user, setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
    })

    const [showUser, setShowUser] = useState(false)

    useEffect(() => {
        getUserId(localStorage.getItem('id')).then(res => {
            setUser({
                username: res.data.user.username,
                name: res.data.user.name,
                surname: res.data.user.surname,
                email: res.data.user.email
            })
        })
    }, [])

    const handleUser = () => {
        (setShowUser(!showUser))
    }

    return (
        <div className="user">
            <img src={src} onClick={handleUser} alt='user'
                title='Your profile' style={{ height: "45px", cursor: "pointer", marginLeft: '15px' }}></img>
            {showUser ? <div><p> <b>Your profile:</b></p>
                <p><b>First name:</b> {user.name}</p>
                <p><b>Last name:</b> {user.surname}</p>
                <p><b>Last name:</b> {user.username}</p>
                <p><b>E-mail:</b> {user.email}</p>
            </div> : null}
        </div>
    )
}
export default User;
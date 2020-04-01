// import React, { useState } from 'react'
// import { getUserId } from '../../../services/apiService'

// const User = () => {
//     const [user,setUser] = useState({
//         username: '',
//         name: '',
//         surname: '',
//         email: '',
//     })

//     getUserId(localStorage.getItem('id')).then(res => {
//         setUser({
//             username: res.data.user.username,
//             name: res.data.user.name,
//             surname: res.data.user.surname,
//             email: res.data.user.email
//         })
//         console.log(res)
//     })

//     return(
//         <div className="profile">
//            <p>Hello {user.username}!</p>
//            <div className="user">
//                <h3>Info</h3>
//                <p>Name: {user.name}</p>
//                <p>Surname: {user.surname}</p>
//                <p>Email: {user.email}</p>
//            </div>
//         </div>
//     )
// }

// export default User;
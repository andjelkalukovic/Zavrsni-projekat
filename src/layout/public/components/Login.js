import React from 'react'

const Login = ()=>{
    //const [personal id, set ]=use state([])
    return(
        <div>
            <input type='text'
            placeholder='username'/>
            <br/>
            <input type='text'
            placeholder='password'/>
            <br/>
            <button>Login</button>
        </div>
    )
}
export default Login;
import React from 'react'
import { useHistory } from 'react-router-dom';
import { logOutUser } from '../../../services/authService';

const Logout = () => {
    const history = useHistory();

    const handleChange = (e) => {
        if(e.target.value === 'logout'){
            logOutUser().then(() => {
                history.push('/');
            })
        }
    }

    return(
    <button onClick={(e)=>handleChange(e)} 
    value='logout'>Sign Out</button>
    )
}

export default Logout
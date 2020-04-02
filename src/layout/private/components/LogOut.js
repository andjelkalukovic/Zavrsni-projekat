import React from 'react'
import { useHistory } from 'react-router-dom';
import { logOutUser } from '../../../services/authService';

const Logout = () => {
    const history = useHistory();

    const handleChange = (e) => {
        if (e.target.value === 'logout') {
            if (window.confirm("Are you sure you want to logout?")) {
                logOutUser().then(() => {
                    history.push('/');
                })
            }
            else { return }
        }
    }

    return (
        <button className='logout-button' onClick={(e) => handleChange(e)}
            value='logout'>Sign Out</button>
    )
}
export default Logout
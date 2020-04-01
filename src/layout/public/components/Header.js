import React from 'react'

const Header =()=>{
    const styles={
        backgroundColor:'#41b3a3',
        color: 'white', 
        height: '70px',
        marginBottom: '10px'       
    }
    return(
        <header style={styles}>
            <h1 style={{padding:'10px'}}>Food for ReBoot</h1>
        </header>
    )
}
export default Header;
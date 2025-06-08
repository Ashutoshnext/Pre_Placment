import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'
function Footer() {
    const { isLoggedIn } = useContext(AuthContext)
    
    return (
        <div className='container'>
            <h2>{isLoggedIn ? 'Welcome, User' : 'Please log in'}</h2>
        
        </div>
    )
}

export default Footer
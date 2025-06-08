import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'

function MainBox() {
    const { isLoggedIn, SetisLogged } = useContext(AuthContext)


    return (
        <>
            <div className="container">
                {isLoggedIn ? (
                    <h2>You are logged in!</h2>
                ) : (
                    <h2>Please log in to continue.</h2>
                )}
            </div>
        </>
    )
}

export default MainBox
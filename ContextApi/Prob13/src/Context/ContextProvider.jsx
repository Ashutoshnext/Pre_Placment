import React, { createContext, useState } from 'react'
export  const AuthContext = createContext();


function ContextProvider({ children }) {
    const [isLoggedIn, SetisLoggedIn] = useState(false)
    return (
        <AuthContext.Provider value={{isLoggedIn, SetisLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider
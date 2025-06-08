import React, { createContext, useState } from 'react'
export const ThemContex = createContext()
function ApiContex({ children }) {
    const [ThemColor, SetThemColor] = useState("light")

    return (
        <ThemContex.Provider value={{ ThemColor, SetThemColor }}>
            {children}
        </ThemContex.Provider>
    )
}

export default ApiContex
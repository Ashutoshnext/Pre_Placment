import React, { useReducer } from 'react'
import "./App.css"
const initialState = {
    theme: "light"
}
function reducer(state, action) {
    switch (action.type) {
        case "Toggle_theme":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            }
        default:
            return state;
    }
}
function Reducerfn() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const ThemeColor = {
        dark: "#000",
        light: "#fff"
    }
    const TextColor = {
        dark: "#fff",
        light: "#000"
    }
    return (
        <>
            <div className='container' style={{ backgroundColor: ThemeColor[state.theme], color: TextColor[state.theme] }}>
                
                <h3 >state color:{state.theme}</h3>
                <button onClick={() => dispatch({ type: "Toggle_theme" })}>ToggleTheme</button>
            </div>

        </>
    )
}

export default Reducerfn
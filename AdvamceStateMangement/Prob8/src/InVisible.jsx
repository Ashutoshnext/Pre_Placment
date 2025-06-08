import React, { useReducer } from 'react'
const initialState = {
    visible: false
}
function reducer(state, action) {
    switch (action.type) {
        case "Invisible":
            return {
                ...state,
                visible: state.visible === false ? true : false
            }

        default:
            state;
    }
}
function InVisible() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <div className="container">

            <h1>Toggle Visibility Using useReducer in React</h1>
            <h1>value : {state.visible?" ":"Hello World"}</h1>
            <button onClick={() => dispatch({ type: "Invisible" })}>ToggleVisible</button>
        </div>
        </>
    )
}

export default InVisible
import React, { useReducer, useState } from 'react'
import "./App.css";
let initailState={
count:0,
}
function reducer(state,action){
    switch (action.type) {
        case "Increment":
            return{
                ...state,
                count:state.count+1
            }
            break;
        case "Decrement":
            return{
                ...state,
                count:state.count-1
            }

        default:
            state;
    }

}
function Counter() {
    const [state,dispatch]=useReducer(reducer,initailState)
  return (
    <>
    <div className="container">

    <h1>counter Appp</h1>
    <h3>count:{state.count}</h3>
    <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
    </div>
    
    </>
  )
}

export default Counter
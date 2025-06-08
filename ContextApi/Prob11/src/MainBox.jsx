import React from 'react'
import './App.css'
import Right from './Right';
function Main(props) {
  return (
    <div className='container'>
      <h3>Name-{props.obj.name}</h3>
      <Right name={props.obj.name} />
    </div>

  )
}

export default Main;
import React from 'react'
import BottomMainRight from './BottomMainRight'
function Right(props) {
    return (
        <div className="rightcontainer">
            <h1>RighContainer</h1>
            <h2>{props.name}</h2>
            <BottomMainRight name={props.name}/>
        </div>
    )
}

export default Right
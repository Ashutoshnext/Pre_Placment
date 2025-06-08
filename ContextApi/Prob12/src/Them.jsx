import React, { useContext, useState } from 'react'
import { ThemContex } from './ApiContex'
function Them() {
    const { ThemColor, SetThemColor } = useContext(ThemContex)
    const ThemChangeHandler = () => {
        SetThemColor(ThemColor === "light" ? "dark" : "light")
    }
const ThemColorSet={
    dark:"#000000",	
    light:" #ffffff"
}
const TextColorSet={
    light:"#000000",	
    dark:" #ffffff"
}
    return (
        <div className="container" style={{backgroundColor:ThemColorSet[ThemColor],color:TextColorSet[ThemColor]}}>
            <h3>Dark and Light Them</h3>
            <h3>This is My Them color : {ThemColor}</h3>
            <button onClick={ThemChangeHandler}>{ThemColor==="light"?"Dark":"Light"}</button>
        </div>
    )
}

export default Them
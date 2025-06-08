import React, { useContext } from 'react';
import "../App.css";
import { AuthContext } from '../Context/ContextProvider';

function Navbar() {
    const { isLoggedIn, SetisLoggedIn } = useContext(AuthContext)
    return (
        <div className="navbar">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <button onClick={()=>SetisLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "LogOut" : "Login"}
            </button>

        </div>
    );
}

export default Navbar;

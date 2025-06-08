import React, { useReducer, useState } from 'react';

const initialState = {
    email: "",
    password: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "email":
            return {
                ...state,
                email: action.payload
            };
        case "password":
            return {
                ...state,
                password: action.payload
            };
        case "submit":
            return {
                ...state,
                email: "",
                password: ""

            };
        case "reset":
            return initialState;
        default:
            throw new Error('invalid action type');
    }
}

function FormHandling() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [data, setdata] = useState([])


    const changeHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type: name, payload: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (state.email.trim() === "" || state.password.trim() === "") {
            alert("Both Email and Password are required.");
            return;
        }
        setdata([...data, state]);
        dispatch({ type: "submit" });
    };
    const resetHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "reset" });
    };

    return (

        <>

            <form className="container">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={changeHandler}
                    value={state.email}
                />
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={changeHandler}
                    value={state.password}
                />
                <button onClick={submitHandler}>Submit</button>
                <button onClick={resetHandler}>Reset</button>

            </form>
            <div className="container">
                {data && data.map((data, index) => (
                    <div key={index}>
                        <p>Email: {data.email} </p>
                        <p>Password:{data.password}</p>
                    </div>
                ))}
            </div>

        </>

    );
}

export default FormHandling;

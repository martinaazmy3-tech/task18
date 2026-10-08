import React, { useState } from "react";

export default function Home() {

    // Hooks Area
    /*
        1. Top Level
        2. Function
    */

    // useState
    let [counter, setCounter] = useState(0);

    function updateCounter() {
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="bg-danger text-light text-center text-uppercase p-3">

                <h1>Home</h1>

                <h2>Counter: {counter}</h2>

                <button
                    className="btn btn-secondary"
                    onClick={updateCounter}
                >
                    Increase
                </button>

            </div>
        </>
    )
}
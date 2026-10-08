import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Products() {

 
    // useState
    
    let [counter, setCounter] = useState(0);

    function updateCounter() {
        setCounter(counter + 1);
    }

   
    // 1- Mounting Stage (Phase 1)
   

    useEffect(() => {
        console.log(`[Stage 1] - (Mounting): Did Mount!`);
    }, []);

 
    // 2- Updating Stage (Phase 2)
   

    useEffect(() => {

        if (counter === 0) {
            return;
        }

        console.log(`[Stage 2] - (Updating): Did Update!`);

    }, [counter]);

    
    // 3- UnMounting Phase
  

    useEffect(() => {

        return () => {
            console.log(`[Stage 3] - (unMount): user Left from the component!`);
        }

    }, []);

    return (
        <>
            <div className="container bg-warning text-center p-5 mt-5">

                <h1>Products</h1>

                <h2>Counter: {counter}</h2>

                <button
                    className="btn btn-secondary"
                    onClick={updateCounter}
                >
                    Increase
                </button>

                <br />
                <br />

                <NavLink
                    className="btn btn-success"
                    to={`details`}
                >
                    Details
                </NavLink>

                <Outlet />

            </div>
        </>
    )
}
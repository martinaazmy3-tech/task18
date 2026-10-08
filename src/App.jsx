import './App.css'
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Details from "./Components/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

    const routes = createBrowserRouter([
        {path: `/`, children: [
            {index: true, element: <Home />},
            {path: `/products`, element: <Products />, children: [
                {path: `details`, element: <Details />},
            ]},
            {path: `*`, element: <NotFound />},
        ]}
    ]);

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
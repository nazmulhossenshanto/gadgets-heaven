import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    }
])

export default routes;
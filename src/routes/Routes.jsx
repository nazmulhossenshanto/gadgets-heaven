import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../components/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('../products.json')
            },
            {
                path: "product/:id",
                loader: ()=> fetch('../products.json'),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "statistics",
                loader: ()=> fetch('../products.json'),
                element: <Statistics></Statistics>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    }
])

export default routes;
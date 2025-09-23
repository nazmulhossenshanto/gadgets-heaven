import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    },
])

export default routes;
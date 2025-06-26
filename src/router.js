import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
        ],
    },
];

export default routes;

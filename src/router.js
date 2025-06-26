import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import MovieList from "./pages/MovieList";
import MovieProfile from "./pages/MovieProfile";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "movies", element: <MovieList /> },
            { path: "movies/:id", element: <MovieProfile /> },
        ],
    },
];

export default routes;

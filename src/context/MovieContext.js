import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const[movies, setMovies] = useState([]);

    useState(() => {
        fetch("http://localhost:6001/movies")
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    }, [])

    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    return(
        <MovieContext.Provider value={{movies, addMovie}}>
            {children}
        </MovieContext.Provider>
    )
}
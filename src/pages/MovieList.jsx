import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";
import "./MovieList.css"
import AddMovieForm from "../components/AddMovieForm";

function MovieList() {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/movies")
        .then(res => res.json())
        .then(data => (
            setMovies(data)
        ))
    }, [])

    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    return (
        <div>
            <AddMovieForm addMovie={addMovie}/>
            <h2>MovieList</h2>
            <ul className="movie-list-container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    )
}

export default MovieList;

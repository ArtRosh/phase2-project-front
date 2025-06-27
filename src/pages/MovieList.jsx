import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";
import "./MovieList.css"

function MovieList() {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/movies")
        .then(res => res.json())
        .then(data => (
            setMovies(data)
        ))
    }, [])
    return (
        <div>
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

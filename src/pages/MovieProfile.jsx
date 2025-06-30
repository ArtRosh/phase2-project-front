import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import "./MovieProfile.css"
import { MovieContext } from "../context/MovieContext";

function MovieProfile() {
    
    const {id} = useParams();
    const { movies } = useContext(MovieContext)

   const movie = movies.find(m => m.id === id)

    if(!movie) return <h2>Loading...</h2>

    
    return (
        <div className="movie-profile-container">
            <img className="movie-poster" src={movie.poster} alt={movie.title} />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-info">Year: {movie.year}</p>
            <p className="movie-info">Director: {movie.director}</p>
            <p className="movie-info">Rating: {movie.rating}</p>
            <Link to="/movies">Back to Movies</Link>
        </div>
    )
}

export default MovieProfile;

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieProfile.css"

function MovieProfile() {
    
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:6001/movies/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }, [id]);

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

import { Link } from "react-router-dom";
import "./MovieCard.css"


function MovieCard({ movie }) {
    return (
        <li className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3 className="movie-card-title">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}</p>
        </li>
    )
}
 
export default MovieCard;

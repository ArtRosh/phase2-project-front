import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "./MovieList.css"
import AddMovieForm from "../components/AddMovieForm";

function MovieList() {
   
    const {movies} = useContext(MovieContext)
    const {addMovie} = useContext(MovieContext)
    
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

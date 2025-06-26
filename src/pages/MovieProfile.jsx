import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    )
}

export default MovieProfile;

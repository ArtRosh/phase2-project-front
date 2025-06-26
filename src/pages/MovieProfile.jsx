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

    return <h2>Movie ID: {id}</h2>
}

export default MovieProfile;

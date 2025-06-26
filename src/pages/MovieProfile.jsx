import { useParams } from "react-router-dom";

function MovieProfile() {
    
    const {id} = useParams();

    return <h2>Movie ID: {id}</h2>
}

export default MovieProfile;

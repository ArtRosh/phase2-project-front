import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "../styles/AddMovieForm.css";

function AddMovieForm() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");

  const { addMovie } = useContext(MovieContext)

  function handleSubmit(e) {
    e.preventDefault();
   
   const newMovie = {
    title,
    poster,
    year,
    director,
    rating
   };

   fetch("http://localhost:6001/movies", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newMovie)
   })
    .then(res => res.json())
    .then(data => {
        addMovie(data)
            setTitle("")
            setDirector("")
            setYear("")
            setPoster("")
            setRating("")
    })
  }

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={e => setDirector(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={e => setPoster(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={e => setRating(e.target.value)}
        min="0"
        max="10"
        step="0.1"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
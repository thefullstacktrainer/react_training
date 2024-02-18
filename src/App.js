import './App.css';
import { useEffect, useState } from "react";

const API_URL = "https://www.omdbapi.com/?apikey="; // get apikey from omdb
function App() {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search)
  }

  useEffect(() => { searchMovies("spiderman") }, []);
  return (
    <div className="App">
      <div>Movie App</div>
      {movies.map(movie => <div key={movie.imdbID}>{movie.Title}</div>)}
    </div>
  );
}

export default App;

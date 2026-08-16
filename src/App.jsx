import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import MovieList from './components/MovieList';
import Header from './components/Header';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
console.log("API_KEY:", API_KEY);


function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (err) {
        setError("Failed to load movies");
        console.error(err);
      }
    };

    fetchMovies();
  }, []);



  console.log("API_KEY:", import.meta.env.VITE_TMDB_API_KEY);

  return (
    <>
       <Header/>
       {error && <p className='text-red-500'>{error}</p>}
       {movies.length > 0 ? <MovieList movies={movies} /> :<p>Loading movies...</p>}
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import MovieList from 'MovieList.js';
import './App.css';

function App() {
  const[movies, setMovies] = useState([]);
  
  const getMovies = async() => {
    useEffect(() => {
      async function getData() {
        const response = await fetch('/api/movies');
        const payload = await response.json();
        setMovies(payload.data);
      }  
      getData();
    }, []);
  }
  
  return (
    <div className="App">
       <MovieList movies={movies} />
    </div>
  );
}

export default App;

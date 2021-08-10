import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
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
  
  const List = (props) => {
  return
  (
    <div className="row">
      {props.movies.slice(0, 4).map((movie, index) => {
        <div className="col-md-3" key={movie.id}>
          <h1>{movie.original_title}</h1>
          <h3>{movie.tagline}</h3>
          <h3>{movie.vote_average}</h3>
          <Link to={"/detailmovie/"+movie.id}>SHOW</Link>
        </div>
      })}
    </div>
  );
};
  
  return (
    <div className="MovieList">
       <List movies={movies} />
    </div>
  );
}

export default MovieList;

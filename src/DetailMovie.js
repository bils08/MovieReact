import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DetailMovie = (props) => {
  
  const getMovies = async() => {
    useEffect(() => {
      async function getData() {
        const response = await fetch('/api/movies');
        const payload = await response.json();
        setDetailMovie(payload.data);
      }  
      getData();
    }, []);
  }
  
  const date = Date().toLocaleString();
  
  const movieId = props.match.params.id;
  
  const[detailMovie, setDetailMovie] = useState([]);
  
  const Movie = detailMovie.filter(movie => movie.id == movieId).map((movie,index) => {
    return (
       <div key={movie.id}>
          <p>{movie.id}</p>
          <p>{movie.original_title}</p>
          <p>{movie.overview}</p>
          <p>{date}</p>
          <p>{movie.runtime} minutes</p>
          <p>{movie.status}</p>
          <p>{movie.tagline}</p>
          <p>{movie.title}</p>
          <p>{movie.vote_average}</p>
          <p>{movie.vote_count}</p>
          <Link to={"/"}>Back</Link>
      </div>
    )
  });
  
  
  return
  (
    <div>
       <Movie />
    </div>
  )
};

export default DetailMovie
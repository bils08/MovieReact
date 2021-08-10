import React from 'react';
import { useState, useEffect } from 'react';

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
  
  const movieId = props.match.params.id;
  
  const[detailMovie, setDetailMovie] = useState([]);
  
  const Movie = detailMovie.filter(movie => movie.id == movieId).map((movie,index) => {
    return (
       <div key={movie.id}>
          <p></p>
          <button>Show</button>
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
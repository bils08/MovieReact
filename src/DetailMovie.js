import React from 'react';
import { useState, useEffect } from 'react';

const DetailMovie = (props) => {
  const movieId = props.match.params.id;
  
  const[detailMovie, setDetailMovie] = useState([]);
  
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
  
  return
  (
    <div>
       <Movie />
    </div>
  )
};

export default DetailMovie
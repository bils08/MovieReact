import React, { useState, useEffect } from 'react';

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
    <div>
      {props.movies.slice(0, 4).map((movie, index) => {
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
          <h3>{movie.tagline}</h3>
          <h3>{movie.vote_average}</h3>
          <Link to={"/edit/"+props.journal._id}>edit</Link> | 
            <a href="#" onClick={() => { props.deleteJournal(props.journal._id)}}>delete</a>
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

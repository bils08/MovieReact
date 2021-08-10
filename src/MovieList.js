import React from "react"

const MovieList = (props) => {
  return
  (
    <div>
      {props.movies.map((movie, index) => {
        <div>
          <h1>{movie.original_title}</h1>
          <h3>{movie.tagline}</h3>
          <h3>{movie.vote_average}</h3>
          <button>Show</button>
        </div>
      })}
    </div>
  );
};

export default MovieList;
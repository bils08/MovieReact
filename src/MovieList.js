import React from "react"

const MovieList = (props) => {
  return
  (
    <div>
      {props.movies.slice(0, 4).map((movie, index) => {
        <div key={movie.id}>
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
import React, {useState, useEffect} from 'react';

const CardList = () => {
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
  
  return
  (
    <div>
      <div className="row">
          <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default CardList;

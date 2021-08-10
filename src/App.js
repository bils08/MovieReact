import './App.css';
import MovieList from 'MovieList.js';
import DetailMovie  from 'DetailMovie.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={MovieList} />
      <Route path="/detailmovie/:id" component={DetailMovie} />
    </Router>
  );
}

export default App;

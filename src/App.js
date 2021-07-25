import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Data } from './Components/Data';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
function App() {
  const [searching, setSearching] = useState("");
  const [movies, setMovies] = useState(Data)
  const [rate, setRate] = useState(0);
  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
        <Filter
                  handleRate={(next) => setRate(next)}
                  handleSearch={(e) => setSearching(e.target.value)}
                />
     <MovieList
                  movies={movies.filter(
                    (choice) =>
                      choice.rate >= rate &&
                      choice.title
                        .toLowerCase()
                        .includes(searching.toLowerCase())
                  )}
                />
      <AddMovie addFn={add} />
    </div>
  );
}

export default App;

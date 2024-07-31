import './App.css';
import Login from './Login'
import Movie from './Movie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movie" element={<Movie />} /> 
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );

}

export default App;

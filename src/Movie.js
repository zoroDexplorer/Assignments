// import React, { useEffect, useState } from 'react';
// import Header from './Header';

// function Movie() {
//   const [movieList, setMovieList] = useState([]);
//   const getMovies = () => {
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=16de228f3ab46407d5de324b08f04d0f")
//       .then(res => res.json())
//       .then(json => setMovieList(json.results));
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <><div>
//           <Header />
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 mt-4">
//               {movieList.map((movie) => (
//                   <div
//                       key={movie.id}
//                       className="w-72 h-auto transform transition duration-300"
//                   >
//                       <a>
//                           <img
//                               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                               className="w-full h-full object-contain transition-transform duration-300 group-hover:shadow-lg group-hover:bg-blue-500"
//                               alt={movie.title} />
//                       </a>
//                   </div>
//               ))}
//           </div></>
//   );
// }

// export default Movie;

// src/Movie.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=16de228f3ab46407d5de324b08f04d0f")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="w-72 h-auto transform transition duration-300"
            onClick={() => handleMovieClick(movie.id)}
          >
            <a>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="w-full h-full object-contain transition-transform duration-300 rounded-lg hover:scale-110"
                alt={movie.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;

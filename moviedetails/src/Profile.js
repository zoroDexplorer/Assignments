import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '16de228f3ab46407d5de324b08f04d0f'; // Replace with your provided API key
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>IMDb Clone using TMDb API</h1>
      <div className="movies flex flex-row">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">

            <img
            style={{width:"300px",height:"250px"}}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.release_date}</span>
            </div>
            <div className="movie-overview">
              <h2>Overview:</h2>
              <p>{movie.overview}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

// src/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=16de228f3ab46407d5de324b08f04d0f&language=en-US`);
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        // <div className="container flex flex-wrap justify-center items-start gap-4 mt-4">
        //     <div className="w-72 h-auto">
        //         <h1 className="font-bold">{movie.title}</h1>
        //         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full h-full object-contain transition-transform duration-300 group-hover:shadow-lg group-hover:bg-blue-500" alt={movie.title} />
            
        //     </div>
        //     <div className="flex flex-col justify-start" >
        //     <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
        //         <p className="text-lg mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
        //         <p className="text-lg"><strong>Overview:</strong> {movie.overview}</p>
        //     </div>
        // </div>
        <div className="mx-auto mt-4 p-6 rounded-lg flex">
            <div className="w-72 h-auto transform transition duration-300">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="object-contain transition-transform duration-300 rounded-lg" alt={movie.title} />
            </div>
            <div className="w-2/3 pl-6">
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                <p className="text-xl mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
                <p className="text-lg"><strong>Overview:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;

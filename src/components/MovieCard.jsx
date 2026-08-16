import React from "react";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({movie}) =>{
    if(!movie) return null;
    return(
    <div className="bg-gray-800 text-white p-4 rounded shadow w-80 min-w-0">
        <img
        src={IMAGE_BASE + movie.poster_path}
        alt={movie.title || "No Title found"} 
        className="w-64 mx-auto rounded"
        />
        <h3 className="mt-2 font-semibold">{movie.title}</h3>
        <p className="text-sm wrap-break-word">{movie.overview || "No overview found"}</p>
        <p className="text-xs mt-1">
        <strong>Release:</strong> {movie.release_date || "No release data found"}
        </p>
    </div>
    );

};

export default MovieCard;
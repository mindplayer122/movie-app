import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    if (!movies || movies.length === 0) return <p>Loading movies...</p>;
    return(
    <div className="flex justify-center">
      <div className="grid grid-cols-5 gap-6 max-w-6xl p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    );
};

export default MovieList;
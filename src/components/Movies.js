import React from "react";
import { movies } from "../data";

function Movies() {
   
  return (
      <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          {movie.title}<br/>
          {movie.time}
          <ul>
            {movie.genres.map((genre, index) => (<li key={'Genre_'+ index}>{genre}</li>))}
          </ul>
        </div>
  ))}
      </div>
  )
}

export default Movies;

import React from "react";
import PropTypes from "prop-types";
import MovieCard from './MovieCard';

function MoviesList({ propsMovies }) {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      {propsMovies.error.response ? <h3>Error data!</h3> 
      : propsMovies.movies.map(movie=><MovieCard key={movie.id} propsMovie={movie}/>)}
    </div>
  );
  console.log(propsMovies);
  return (
    <div>
      Movies List Comp
      {propsMovies.movies.length === 0 ? emptyMessage : moviesList}
    </div>
  );
}

MoviesList.propsTypes = {
  propsMovies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviesList;

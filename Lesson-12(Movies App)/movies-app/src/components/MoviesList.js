import React from "react";
import PropTypes from "prop-types";
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
// import PacmanLoader from "react-spinners/PacmanLoader";
import {RiseLoader} from "react-spinners";

function MoviesList({ propsMovies }) {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      {propsMovies.error.response ? (
        <h3>Error data!</h3>
      ) : (
        <Grid columns={3}>
          <Grid.Row>
            {propsMovies.movieList.map((movie) => (
              <Grid.Column key={movie.id}>
                <MovieCard propsMovie={movie} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )}
    </div>
  );

  console.log(propsMovies);
  return (
    <div>
      Movies List Comp
      <br/>
      <RiseLoader color={'#00b5ad'}  loading={propsMovies.fetching}  />
      <br/>
      {propsMovies.movieList.length === 0 ? emptyMessage : moviesList}
    </div>
  );
}

MoviesList.propsTypes = {
  propsMovies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviesList;

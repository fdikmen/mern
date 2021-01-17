import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewMovieForm from '../NewMovieForm';
import { connect } from 'react-redux';
import {onNewMovieSubmit,onUpdateMovieSubmit,fetchMovie} from '../../actions/newMovieAction';

class NewMoviesPage extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  componentDidMount() {
    const { match } = this.props;
    if (!this.props.willEditMovie && match.params.id) {
      this.props.fetchMovie(match.params.id);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <NewMovieForm
          willEditMovie={this.props.willEditMovie}
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit}
          onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({newMovieReducer,moviesReducer},props) => {
    return {
        newMovie:newMovieReducer,
        willEditMovie:moviesReducer.movieList.find(item=>item.id === props.match.params.id)
    }
}

const mapDispatchToProps = {
    onNewMovieSubmit,fetchMovie,onUpdateMovieSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviesPage)



import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import MoviesList from '../MoviesList';
import {fetchMovies,deleteMovie} from '../../actions/moviesAction';

export class MoviesPage extends Component {

    static propsTypes={
        movies:PropsTypes.object.isRequired,
        deleteMovie:PropsTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchMovies();
    }
    

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList deleteMovie={this.props.deleteMovie} propsMovies={this.props.movies}></MoviesList>
            </div>
        )
    }
}

/*const mapStateToProps = state => {
    return {
        movies:state.moviesReducer
    }
}*/

const mapStateToProps = ({moviesReducer}) => {
    return {
        movies:moviesReducer
    }
}

const mapDispatchToProps = {
    fetchMovies,deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

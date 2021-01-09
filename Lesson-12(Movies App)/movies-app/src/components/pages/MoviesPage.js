import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import MoviesList from '../MoviesList';

export class MoviesPage extends Component {

    static propsTypes={
        movies:PropsTypes.array.isRequired
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList movies={this.props.movies}></MoviesList>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

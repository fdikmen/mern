import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewMovieForm from '../NewMovieForm';
import { connect } from 'react-redux';
import {onNewMovieSubmit} from '../../actions/newMovieAction';

class NewMoviesPage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        console.log(this.props);
        return (
            <div>               
                <NewMovieForm willEditMovie={this.props.willEditMovie} newMovie={this.props.newMovie} onNewMovieSubmit={this.props.onNewMovieSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = ({newMovieReducer,moviesReducer},props) => {
    return {
        newMovie:newMovieReducer,
        willEditMovie:moviesReducer.movieList.find(item=>item.id === props.match.params.id)
    }
}

const mapDispatchToProps = {
    onNewMovieSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviesPage)



import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MoviesList = props=>{
//     const emptyMessage=(<p>There are no movies yet.</p>)
// }
class MoviesList extends Component {
    render() {
const emptyMessage=(<p>There are no movies yet.</p>)
const moviesList=(<div>Movies List</div>)
// console.log(this.props);
        return (
            <div>
                Movies List Comp
                {this.props.movies.length ===0 ? emptyMessage : moviesList}
            </div>
        )
    }
}

MoviesList.propsTypes={
    movies:PropTypes.array.isRequired
};
export default MoviesList;

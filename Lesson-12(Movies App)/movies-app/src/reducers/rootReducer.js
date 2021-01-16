import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import newMovieReducer from './newMovieReducer';

export default combineReducers({
    moviesReducer,newMovieReducer
})
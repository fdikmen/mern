import { NEW_MOVIE_PENDING,NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED } from "../actions/newMovieAction";
const initialState = {
  fetching: false,
  fetched: false,
  movieList: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {      
    case NEW_MOVIE_PENDING:
        return { ...state,fetching:true ,fetched: false };
    case NEW_MOVIE_FULFILLED:
      return { ...state, movieList: payload ,fetching:false,fetched:true};
    case NEW_MOVIE_REJECTED:
      return { ...state, error: payload,fetching:false,fetched: false };
    default:
      return state;
  }
};

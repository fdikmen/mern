import {
  NEW_MOVIE_PENDING,
  NEW_MOVIE_FULFILLED,
  NEW_MOVIE_REJECTED,  
  UPDATE_MOVIE_PENDING,
  UPDATE_MOVIE_FULFILLED,
  UPDATE_MOVIE_REJECTED,
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
} from "../actions/newMovieAction";
const initialState = {
  fetching: false,
  fetched: false,
  movieList: [],
  movie: {fetching:false},
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_MOVIE_PENDING:
      return { ...state, fetching: true, fetched: false };
    case NEW_MOVIE_FULFILLED:
      return { ...state, movieList: payload, fetching: false, fetched: true };
    case NEW_MOVIE_REJECTED:
      return { ...state, error: payload, fetching: false, fetched: false };

      //UPDATE MOVIE FROM onUpdateMovieSubmit FUNC IN ACTION
  case UPDATE_MOVIE_PENDING:
      return { ...state, fetching: true, fetched: false };
    case UPDATE_MOVIE_FULFILLED:
      return { ...state, fetching: false, fetched: true };
    case UPDATE_MOVIE_REJECTED:
      return { ...state, error: payload, fetching: false, fetched: false };

    //GET MOVIE from fetchMovie func in Action
    case FETCH_MOVIE_PENDING:
      return { ...state,movie:{fetching:true} };
    case FETCH_MOVIE_FULFILLED:
      return { ...state,movie:{...payload,fetching:false} };
    case FETCH_MOVIE_REJECTED:
      return { ...state,movie:{fetching:false} };
    default:
      return state;
  }
};

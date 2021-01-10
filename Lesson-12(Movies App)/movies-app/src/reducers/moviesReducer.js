import {FETCH_MOVIES} from '../actions/moviesAction';
const initialState = {
movies:[]
}

export default (state =initialState, { type, payload }) => {
    switch (type) {

    case FETCH_MOVIES:
        return { ...state, movies:payload }

    default:
        return state
    }
}

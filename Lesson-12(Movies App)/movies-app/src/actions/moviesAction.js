import axios from "axios";
import { API_BASE } from "../config/env";

export const FETCH_MOVIES = "FETCH_MOVIES";

export function fetchMovies() {
  return (dispatch) => {
    axios
      .get(`${API_BASE}/movies`)
      .then((result) => result.data)
      // .then(data=>console.log(data))
      .then((data) =>
        dispatch({
          type: FETCH_MOVIES,
          payload: data,
        })
      )
      .catch((error) => console.log(error));
  };
}

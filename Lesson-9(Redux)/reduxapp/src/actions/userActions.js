import axios from "axios";
export const UPDATE_USER = "UPDATE_USER"; /*1-Define type */
export const GET_USER_ERROR = "GET_USER_ERROR"; /*1-Define type */

/*2-Define ActionCreator */
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser,
    },
  };
}

/*export function getUser() {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.data)
      .then((response) => dispatch(updateUser(response.name)))
      .catch(error => dispatch(showError()));
  };
}*/

export function getUser() {
    return async dispatch => {
     try {
         const result=await axios.get("https://jsonplaceholder.typicode.com/users/1");
         dispatch(updateUser(result.data.name));
     } catch (e) {
         dispatch(showError());
     }
    };
  }

export function showError() {
  return {
    type: GET_USER_ERROR,
    payload: {
      error: "ERROR ONE",
    },
  };
}

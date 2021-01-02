export const UPDATE_USER = 'UPDATE_USER'; /*1-Define type */

/*2-Define ActionCreator */
export function updateUser(newUser){
    return{
        type:UPDATE_USER,
        payload:
        {
            user:newUser
        }
    }
}
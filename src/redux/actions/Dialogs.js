import { SET_ERROR } from "."

export const setError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    }
}
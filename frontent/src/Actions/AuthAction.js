import * as AuthApi from '../Api/AuthRequest'
   
export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.logIn(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) { 
        console.log(error);
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signUp(formData)
        console.log({data});
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const logOut = () => async (dispatch) => {
    dispatch({ type: "LOG-OUT" })
}
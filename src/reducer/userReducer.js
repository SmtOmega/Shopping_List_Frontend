export const LOGIN_USER = "LOGIN_USER"
export const SIGNUP_USER = "SIGNUP_USER"
export const CHECK_LOGIN = "CHECK_LOGIN"
export const LOGOUT_USER = "LOGOUT_USER"
export const LOADING = "LOADING"


const reducer = (state, action) =>{ 
    if(action.type === LOADING){
        return {...state, loading:true}
    }

    if(action.type === CHECK_LOGIN){
        return {...state, loading: false, loggedIn: action.payload}
    }

    if(action.type === LOGIN_USER){
        return {...state, loading: false, user: action.payload}
    }
    if (action.type === SIGNUP_USER){
        return {...state, loading: false, user: action.payload}
    }
    if(action.type === LOGOUT_USER){
        return {...state, loading: false}
    }
    return state
}


export default reducer
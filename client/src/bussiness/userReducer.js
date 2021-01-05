import * as ACTIONS from './usersActions'

const initialState = {
    users: [
        {firstName: "yaniv", lastName : 'levi'}
    ]
}

const usersReducer = (state= initialState, action) => {
switch(action.type){
    case ACTIONS.USER_LOGGED_IN:
        return{ ...state, currentUser: action.user}
    case ACTIONS.USER_LOGGED_OUT:
        return{ ...state, currentUser: action.user}
        default:
			return state;
}
}



export default usersReducer;

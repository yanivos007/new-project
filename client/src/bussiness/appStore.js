import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from "./userReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";



const appStore = createStore(
    combineReducers({
        users: userReducer,
        // vacations: vacationReducer
    }),
    composeWithDevTools(
		applyMiddleware(thunk)
)
);
export default appStore;

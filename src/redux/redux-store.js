import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer, // <---profileReducer тоже самое, что и profileReducer: profileReducer  (св-во(метод) : значание(функция, которую мы определили))
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)
));


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window._store_ = store;

export default store;

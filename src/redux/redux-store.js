import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let reducers = combineReducers({
    profilePage : profileReducer, //тоже самое, что и profileReducer: profileReducer  (св-во(метод) : значание(функция, которую мы определили))
    dialogsPage : dialogsReducer,
    navBar : navbarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

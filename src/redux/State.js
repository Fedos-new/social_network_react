import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


const ADD_POST  = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi man! How are you?', likeCount: 5},
                {id: 2, message: 'My fist post!', likeCount: 9},
                {id: 3, message: 'Cool!!!', likeCount: 10},
                {id: 4, message: 'I\'m fine :-)', likeCount: 3},
                {id: 5, message: 'Where you been?', likeCount: 13},
                {id: 6, message: 'Learn JS!', likeCount: 19},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 2, name: 'Roman', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 3, name: 'Leha', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 4, name: 'Ivan', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 5, name: 'Sveta', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'WTF?:-)'},
                {id: 5, message: ':-)'},
            ],
            newMessageText: ''
        },
        navBar: {},
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель // патерн observer
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } )
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,})
export const updateNewMessageText = (text)=> ({
    type: UPDATE_NEW_MESSAGE_TEXT , newText: text
})

window.state = store;
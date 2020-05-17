const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi man! How are you?', likeCount: 5},
        {id: 2, message: 'My fist post!', likeCount: 9},
        {id: 3, message: 'Cool!!!', likeCount: 10},
        {id: 4, message: 'I\'m fine :-)', likeCount: 3},
        {id: 5, message: 'Where you been?', likeCount: 13},
        {id: 6, message: 'Learn JS!', likeCount: 19},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } )
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi man! How are you?', likeCount: 5},
        {id: 2, message: 'My fist post!', likeCount: 9},
        {id: 3, message: 'Cool!!!', likeCount: 10},
        {id: 4, message: 'I\'m fine :-)', likeCount: 3},
        {id: 5, message: 'Where you been?', likeCount: 13},
        {id: 6, message: 'Learn JS!', likeCount: 19},
    ],

    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {id: 5, message: action.newPostText, likeCount: 0}]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }


        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer;
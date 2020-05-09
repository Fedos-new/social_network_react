import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())  ;
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
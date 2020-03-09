import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return  (
    <div>
        My post
        <div>
            <textarea/>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

         </div>
    </div>
    );
};

export default MyPosts;
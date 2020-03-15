import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea/>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi man! How are you?" likeCount="5" repost="5" />
                <Post message="My fist post!" likeCount="9" />
                <Post message="Cool!!!" likeCount="10" />
                <Post message="I'm fine :-)" likeCount="3" />
                <Post message="Where you been?" likeCount="13" />
                <Post message="Learn JS!" likeCount="19" />

            </div>
        </div>
    );
};

export default MyPosts;
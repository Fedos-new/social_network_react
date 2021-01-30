import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return  (
            <div className={s.item}>
            <img alt='avatar' src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'/>
                {props.message}
             <div>
                <span>Like </span> {props.likeCount}

             </div>
            </div>
    );
};

export default Post;

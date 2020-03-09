import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return  (
            <div className={s.item}>
            <img alt='аватарка' src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'/>
              post1
             <div>
                <span>Like</span>
             </div>
            </div>
    );
};

export default Post;
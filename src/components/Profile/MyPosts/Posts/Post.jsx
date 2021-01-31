import React from 'react';
import s from './Post.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    return  (
            <div className={s.item}>
            <div className={s.content}>
                <img alt='avatar' src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'/>
                <span >
                    {props.message}
                    <div className={s.likeCount} >
                       <FontAwesomeIcon icon={faThumbsUp} className={s.iconLike} />
                        {props.likeCount}
                    </div>
                </span>
            </div>
             <div>
                 {/*<FontAwesomeIcon icon={faThumbsUp} className={s.iconLike} /> {props.likeCount}*/}

             </div>
            </div>
    );
};

export default Post;

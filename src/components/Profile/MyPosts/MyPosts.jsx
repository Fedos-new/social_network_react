import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validator/valodators";
import {Textarea} from "../../common/components/FormsControls/FormsControls";




const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

    let addNewPost = (value) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});


const maxLength15 = maxLengthCreator(15)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="what's new?"
                       validate={[maxLength15]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'MyPostAddNewPost'})(AddNewPostForm)

export default MyPosts;

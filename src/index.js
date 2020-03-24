import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./components/Dialogs/Dialogs";

let posts = [
    {id: 1, message: 'Hi man! How are you?', likeCount: 5},
    {id: 2, message: 'My fist post!', likeCount: 9},
    {id: 3, message: 'Cool!!!', likeCount: 10},
    {id: 4, message: 'I\'m fine :-)', likeCount: 3},
    {id: 5, message: 'Where you been?', likeCount: 13},
    {id: 6, message: 'Learn JS!', likeCount: 19},
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Leha'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Sveta'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'WTF?:-)'},
    {id: 5, message: ':-)'},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
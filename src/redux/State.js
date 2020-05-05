export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi man! How are you?', likeCount: 5},
                {id: 2, message: 'My fist post!', likeCount: 9},
                {id: 3, message: 'Cool!!!', likeCount: 10},
                {id: 4, message: 'I\'m fine :-)', likeCount: 3},
                {id: 5, message: 'Where you been?', likeCount: 13},
                {id: 6, message: 'Learn JS!', likeCount: 19},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 2, name: 'Roman', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 3, name: 'Leha', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 4, name: 'Ivan', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {id: 5, name: 'Sveta', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'WTF?:-)'},
                {id: 5, message: ':-)'},
            ],
            newMessageText: ''
        },
        navBar: {},
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);

    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель // патерн observer
    }
}

window.state = store;
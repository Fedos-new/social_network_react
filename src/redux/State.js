let rerenderEntireTree = () => {
    console.log('state changed');
}

export let state = {
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

};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);

}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export  const subscribe = (observer) =>  {
    rerenderEntireTree = observer; //наблюдатель // патерн observer
}
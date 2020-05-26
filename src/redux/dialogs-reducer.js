const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: text}] // спред оператор ... делаем глубокую копию массива messages и добавляем/уточняем 2 св-ва в массиве
            }
        }
        case   UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
export const updateNewMessageText = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;
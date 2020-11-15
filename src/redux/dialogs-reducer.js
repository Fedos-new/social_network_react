const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]

}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: {
            let text = action.newMessageElement;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}] // спред оператор ... делаем глубокую копию массива messages и добавляем/уточняем 2 св-ва в массиве
            }
        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageElement) => ({type: SEND_MESSAGE, newMessageElement})


export default dialogsReducer;
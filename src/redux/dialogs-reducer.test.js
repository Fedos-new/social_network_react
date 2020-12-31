import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";

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


test('length of message should be incremented ', () => {
    //1.  test data
    let action = sendMessageCreator('Это проверочное сообщение')

    //2. action
    let newState = dialogsReducer(initialState,action)
    //3.expected
    expect(newState.messages.length).toBe(6)
})

test('length of dialogs should be incremented ', () => {
    //1.  test data
    let action = sendMessageCreator('Это проверочное сообщение')

    //2. action
    let newState = dialogsReducer(initialState,action)
    //3.expected
    expect(newState.dialogs.length).toBe(6)
})

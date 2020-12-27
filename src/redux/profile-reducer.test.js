import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let initialState = {
    posts: [
        {id: 1, message: 'Hi man! How are you?', likeCount: 5},
        {id: 2, message: 'My fist post!', likeCount: 9},
        {id: 3, message: 'Cool!!!', likeCount: 10},
        {id: 4, message: 'I\'m fine :-)', likeCount: 3},
        {id: 5, message: 'Where you been?', likeCount: 13},
        {id: 6, message: 'Learn JS!', likeCount: 19},
    ]
}


test('length of posts should be incremented ', () => {
    //1.  test data
    let action = addPostActionCreator('Проверка связи!')

    //2. action
    let newState = profileReducer(initialState,action)

    //3.expected
    expect(newState.posts.length).toBe(7)
})

test('message of new post should be Проверка связи!', () => {
    //1.  test data
    let action = addPostActionCreator('Проверка связи!')

    //2. action
    let newState = profileReducer(initialState,action)

    //3.expected
    expect(newState.posts[6].message).toBe('Проверка связи!')
})

test('after deleting length of message should be decrement', () => {
    //1.  test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(initialState,action)

    //3.expected
    expect(newState.posts.length).toBe(5)
})

test(`after deleting length  shouldn't be decrement if id is incorrect`, () => {
    //1.  test data
    let action = deletePost(1000)

    //2. action
    let newState = profileReducer(initialState,action)

    //3.expected
    expect(newState.posts.length).toBe(6)
})
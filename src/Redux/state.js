let rerenderEntireTree = () => {
    console.log("Rerendering")
}

let state = {

    profile: {
        postsData: [
            {id: 1, message: 'Hello', likesCount: 1},
            {id: 2, message: 'Yo', likesCount: 7},
            {id: 3, message: 'Hi', likesCount: 8},
        ],
        newPostText: 'lol'
    },

    dialogs: {
        dialogsListData: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Ann'},
        ],

        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hi'},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profile.newPostText,
        likesCount: 0
    }
    state.profile.postsData.push(newPost)
    state.profile.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state


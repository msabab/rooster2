export const initialState = {
    posts: [],
    comments: [],
    users: [],
}

export const appReducer = (state, action) => {
    switch (action.type) {
        case "init": {
            return {
                ...state,
                ...action.value
            }
        }
        default:
            state;
    }
}
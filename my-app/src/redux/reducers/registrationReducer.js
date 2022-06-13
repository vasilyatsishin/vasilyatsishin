const initialState = {
    data: {
        username: null,
        password: null,
        email: null
    }
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default registrationReducer
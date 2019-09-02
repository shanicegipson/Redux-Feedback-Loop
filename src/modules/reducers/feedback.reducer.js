const initalObject = {
    feeling: 0,
    understanding: 0, 
    support: 0,
    comments: '',
}

const feedbackReducer = (state = initalObject, action) => {
    if(action.type === 'SET_FEELING'){
        return {
            ...state,
            feeling: action.payload
        }
    }

    if(action.type === 'SET_UNDERSTANDING'){
        return {
            ...state,
            understanding: action.payload
        }
    }

    if(action.type === 'SET_SUPPORT'){
        return {
            ...state,
            support: action.payload
        }
    }

    if(action.type === 'SET_COMMENTS'){
        return {
            ...state,
            comments: action.payload
        }
    }

    return state;
}

export default feedbackReducer;
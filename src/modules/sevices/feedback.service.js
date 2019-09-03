import axios from 'axios'

const getFeedback = () => {
    return axios ({
        method: 'GET',
        url: '/feedback'
    })
}

const postFeedback = (feedbackReducer) => {
    return axios ({
        method: 'POST',
        url: '/feedback',
        data: feedbackReducer
    })
}

export {
    getFeedback,
    postFeedback
}
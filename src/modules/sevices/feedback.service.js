import axios from 'axios'

const getFeedback = () => {
    return axios ({
        method: 'GET',
        url: '/feedback'
    })
}

const postFeedback = (feedback) => {
    return ({
        method: 'POST',
        url: '/feedback',
        data: {feedback}
    })
}

export {
    getFeedback,
    postFeedback
}
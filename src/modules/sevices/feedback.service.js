import axios from 'axios'

const getFeedback = () => {
    axios.get('/feedback')
}

const postFeedback = () => {
    axios.post('/feedback')
}
import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import {postFeedback} from '../../../modules/sevices/feedback.service'

class CommentsPage extends Component {

    moveToHomePage = () => {
        this.props.history.push('/')
    }

    submitToDatabase = () => {
        postFeedback(this.props.store.feedbackReducer);
        this.moveToHomePage();
    }

    render () {

        
        return(
            <div>
                <h2>Lets Review</h2>
                <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
                <p>Supported: {this.props.store.feedbackReducer.support}</p>
                <p>Comment: {this.props.store.feedbackReducer.comments}</p>
                <button onClick={this.submitToDatabase}>Submit</button>
            </div>
        )
    }
}

export default connect (mapStoreToProps)(CommentsPage);
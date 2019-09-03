import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CommentsPage extends Component {

    state= {
        value: " "
    }

    moveToReviewPage = () => {
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.value});
        this.props.history.push('/Review')
    }

    addComments = (event) => {
        const commentInfo= event.target.value;
        this.setState({
            value: commentInfo
        })

    }

    render () {

        return(
            <div>
                <h2>Is there anything else you'd like us to know?</h2>
                <textarea type="text" value={this.state.value} onChange={this.addComments} placeholder="What would you like for us to know?" />
                <button onClick={this.moveToReviewPage}>Let's review</button>
            </div>
        )
    }
}

export default connect (mapStoreToProps)(CommentsPage);
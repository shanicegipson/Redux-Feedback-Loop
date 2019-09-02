import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CommentsPage extends Component {

    moveToReviewPage = () => {
        this.props.history.push('/Review')
    }

    render () {

        return(
            <div>
                <h2>Is there anything else you'd like us to know?</h2>
                <input type="text" placeholder="What would you like for us to know?" />
                <button onClick={this.moveToReviewPage}>Let's review</button>
            </div>
        )
    }
}

export default connect (mapStoreToProps)(CommentsPage);
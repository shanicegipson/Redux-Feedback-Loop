import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CommentsPage extends Component {

    moveToHomePage = () => {
        this.props.history.push('/')
    }

    render () {

        return(
            <div>
                <h2>Lets Review</h2>
                <p></p>
                <button onClick={this.moveToHomePage}>Submit</button>
            </div>
        )
    }
}

export default connect (mapStoreToProps)(CommentsPage);
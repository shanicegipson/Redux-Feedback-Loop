import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import './SupportedPage.css'

class SupportedPage extends Component {

    moveToCommentsPage = () => {
        this.props.history.push('/Comments')
    }

    render () {
        return(
            <div>
                <h2>Did you feel supported by Prime staff today?</h2>
                <div>
                      <span className="Not Supported">I Feel Abandoned</span> 
                        <input type='radio' id='1' name='rate' />
                        <input type='radio' id='2' name='rate' />
                        <input type='radio' id='3' name='rate' />
                        <input type='radio' id='4' name='rate' />
                        <input type='radio' id='5' name='rate' />
                      <span className="Very Supported">I Feel Supported</span>
                  </div>
                  <br />
                <button className='Button' onClick={this.moveToCommentsPage}>Leave a Comment</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SupportedPage);
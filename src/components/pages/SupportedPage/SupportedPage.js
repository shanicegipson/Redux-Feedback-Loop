import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import './SupportedPage.css'

class SupportedPage extends Component {

    moveToCommentsPage = () => {
        this.props.history.push('/Comments')
    }

    selectSupportedRate = (event) => {
        const supportedValue = parseInt(event.target.value);
        this.props.dispatch({type: 'SET_SUPPORT', payload: supportedValue});

    }

    render () {
        return(
            <div>
                <h2>Did you feel supported by Prime staff today?</h2>
                <p>On a scale to 1 to 5, do you feel supported today? 1 being I feel abandoned to 5 being I feel supported!</p>
                <div>
                      <span className="Not Supported">I Feel Abandoned</span> 
                        <input className='rating' type='radio' value='1' name='rate' onChange={this.selectSupportedRate} />
                        <input className='rating' type='radio' value='2' name='rate' onChange={this.selectSupportedRate} />
                        <input className='rating' type='radio' value='3' name='rate' onChange={this.selectSupportedRate} />
                        <input className='rating' type='radio' value='4' name='rate' onChange={this.selectSupportedRate} />
                        <input className='rating' type='radio' value='5' name='rate' onChange={this.selectSupportedRate} />
                      <span className="Very Supported">I Feel Supported</span>
                  </div>
                  <br />
                <button className='Button' onClick={this.moveToCommentsPage}>Leave a Comment</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SupportedPage);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import './SupportedPage.css'

class SupportedPage extends Component {

    moveToCommentsPage = () => {
        this.props.history.push('/Comments')
    }

    selectSupportedRate = (event) => {
        const supportedId = event.target.value;
        console.log('Trying to get id', supportedId);
        const supported = this.props.store.feelingReducer[supportedId];
        this.props.dispatch({type: 'SET_SUPPORT', payload: supported});

        this.moveToCommentsPage();
    }

    render () {
        return(
            <div>
                <h2>Did you feel supported by Prime staff today?</h2>
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
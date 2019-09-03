import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import './ContentPage.css'

class ContentPage extends Component {


    moveToSupportedPage = () => {
        this.props.history.push('/Supported')
    }

    selectContentRate = (event) => {
        const contentValue = parseInt(event.target.value);
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: contentValue});

    }

    render () {
        return(
            <div>
                <h2>How well did you understand today's material?</h2>
                <p>On a scale to 1 to 5, how well do you understand the material today? 1 being I'm lost to 5 being I got this!</p>
                <div>
                      <span className="Understanding Bad">I'm Totally Lost</span> 
                        <input className='rating' type='radio' value='1' name='rate' onChange={this.selectContentRate} />
                        <input className='rating' type='radio' value='2' name='rate' onChange={this.selectContentRate} />
                        <input className='rating' type='radio' value='3' name='rate' onChange={this.selectContentRate} />
                        <input className='rating' type='radio' value='4' name='rate' onChange={this.selectContentRate} />
                        <input className='rating' type='radio' value='5' name='rate' onChange={this.selectContentRate} />
                      <span className="Understanding Great">I've got this!</span>
                  </div>
                  <br />
                <button className="contentButton" onClick={this.moveToSupportedPage}>How can we help?</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ContentPage);
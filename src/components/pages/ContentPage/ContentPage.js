import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class ContentPage extends Component {


    moveToSupportedPage = () => {
        this.props.history.push('/Supported')
    }

    selectContentRate = (event) => {
        const contentId = event.target.value;
        console.log('Trying to get id', contentId);
        const content = this.props.store.feelingReducer[contentId];
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: content});

        this.moveToSupportedPage();
    }

    render () {
        return(
            <div>
                <h2>How well did you understand today's material?</h2>
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
                <button onClick={this.moveToSupportedPage}>How can we help?</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ContentPage);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class ContentPage extends Component {

    moveToSupportedPage = () => {
        this.props.history.push('/Supported')
    }

    render () {
        return(
            <div>
                <h2>How well did you understand today's material?</h2>
                <div>
                      <span className="Understanding Bad">I'm Totally Lost</span> 
                        <input type='radio' id='1' name='rate' />
                        <input type='radio' id='2' name='rate' />
                        <input type='radio' id='3' name='rate' />
                        <input type='radio' id='4' name='rate' />
                        <input type='radio' id='5' name='rate' />
                      <span className="Understanding Great">I've got this!</span>
                  </div>
                  <br />
                <button onClick={this.moveToSupportedPage}>How can we help?</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ContentPage);
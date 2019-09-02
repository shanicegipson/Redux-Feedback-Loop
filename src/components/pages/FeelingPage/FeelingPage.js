import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


          
  

class FeelingPage extends Component {

    moveToContentPage = () => {
        this.props.history.push('/Content')
    }

    selectFeeling = (event) => {
        console.log('this is a POST');
    }


    render () {
        
        return (
            <div>
                <h1>How Are You Feeling Today?</h1>
                  <div>
                      <span className="Feeling Bad">I'm Feeling Stressed</span> 
                        <input className='rating' type='radio' id='1' name='rate' />
                        <input className='rating' type='radio' id='2' name='rate' />
                        <input className='rating' type='radio' id='3' name='rate' />
                        <input className='rating' type='radio' id='4' name='rate' />
                        <input className='rating' type='radio' id='5' name='rate' />
                      <span className="Feeling Great">I'm Feeling Great</span>
                  </div>
                  <br />
                <button onClick={this.moveToContentPage}>Move to Understanding</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(FeelingPage);
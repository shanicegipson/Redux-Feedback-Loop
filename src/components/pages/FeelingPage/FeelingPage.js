import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';


          
  

class FeelingPage extends Component {


    componentDidMount() {
        console.log('Mounted')
    }

    moveToContentPage = () => {
        this.props.history.push('/Content')
    }

    selectFeelingRate = (event) => {
        const ratingId = event.target.value;
        console.log('Trying to get id', ratingId);
        const feeling = this.props.store.feelingReducer[ratingId];
        this.props.dispatch({type: 'SET_FEELING', payload: feeling});


    }


    render () {
        
        return (
            <div>
                <h1>How Are You Feeling Today?</h1>
                  <div>
                      <span className="Feeling Bad">I'm Feeling Stressed</span> 
                        <input className='rating' type='radio' value='1' name='rate' onChange={this.selectFeelingRate} />
                        <input className='rating' type='radio' value='2' name='rate' onChange={this.selectFeelingRate} />
                        <input className='rating' type='radio' value='3' name='rate' onChange={this.selectFeelingRate} />
                        <input className='rating' type='radio' value='4' name='rate' onChange={this.selectFeelingRate} />
                        <input className='rating' type='radio' value='5' name='rate' onChange={this.selectFeelingRate} />
                      <span className="Feeling Great">I'm Feeling Great</span>
                  </div>
                  <br />
                <button onClick={this.selectFeelingRate}>Move to Understanding</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(FeelingPage);
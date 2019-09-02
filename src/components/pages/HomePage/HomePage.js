import React, {Component} from 'react';
import './HomePage.css';


class HomePage extends Component {

    moveToFeelingsPage = () => {
        this.props.history.push('/Feelings')
    }

    render () {
        return(
            <div>
                <h2>We hope you had a great day, we would love to have your feedback!</h2>
                <p>On you daily feedback form you can tell us how you are feeling, 
                    <br />
                    how you feel about the material, if you feel supported by staff and any comments you may have. 
                    <br />
                    Click on the button below to begin adding your feedback</p>
                <button className='homeButton' onClick={this.moveToFeelingsPage}>Begin Feedback</button>
            </div>
        )
    }
}

export default HomePage;
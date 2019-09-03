import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import FeelingPage from '../pages/FeelingPage/FeelingPage';
import ContentPage from '../pages/ContentPage/ContentPage';
import SupportedPage from '../pages/SupportedPage/SupportedPage';
import CommentsPage from '../pages/CommentsPage/CommentsPage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Feelings' component={FeelingPage} />
          <Route exact path='/Content' component={ContentPage} />
          <Route exact path='/Supported' component={SupportedPage} />
          <Route exact path='/Comments' component={CommentsPage} />
          <Route exact path='/Review' component={ReviewPage} />
        </Router>

        <footer className="App-Footer">
          
        </footer>
      </div>
    );
  }
}

export default App;

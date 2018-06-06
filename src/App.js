import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProfilePageContainer from './components/profile_page/profile_page_container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ProfilePageContainer />
      </div>
    );
  }
}

export default App;

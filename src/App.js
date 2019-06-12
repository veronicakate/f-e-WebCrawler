import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { userInput: '' };
  render() {
    return (
      <div className="App">
        <h1> Web Crawler hello</h1>
        <form onSubmit={e => this.hendleSubmit(e)}>
          <input
            type="text"
            placeholder="URL"
            name="urlSearchbar"
            onChange={e => this.hendleUserInput(e)}
          />
          <input type="submit" name="submitButton" />
        </form>
      </div>
    );
  }
  hendleUserInput = e => {
    this.setState({ userInput: e.target.value });
  };
  hendleSubmit = e => {
    e.preventDefault();
    // return axios.get('api.com', { url: this.state.userInput });
  };
}

export default App;

import React, { Component } from 'react';
import ChatRoom from "./ChatRoom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-primary">
          <a href="App" className="navbar-brand text-white">Chat React</a>
        </nav>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ChatRoom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

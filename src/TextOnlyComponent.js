import React, { Component } from 'react';

const Comment = ({ text }) => text.replace(':)', '[smile]');

class App extends Component {
  render() {
    return (
      <div>
        <Comment text="Text only components are awesome :)" />
      </div>
    );
  }
}

export default App;

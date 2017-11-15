import React, { Component } from 'react';

const Fruits = () => [
  <li key="1">Pear</li>,
  <li key="2">Water Melon</li>,
];

class App extends Component {
  render() {
    return [
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <Fruits />
      </ul>,
      <div>this is a div</div>,
    ];
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span className="overlay__close" onClick={this.props.onClose}>
          &times;
        </span>
        {this.props.children}
      </div>,
      this.container
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { overlayActive: true };
  }

  closeOverlay() {
    this.setState({ overlayActive: false });
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.overlayActive && <Overlay onClose={this.closeOverlay.bind(this)}>overlay content</Overlay>}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

const Profile = ({ user }) => (<div>name: {user.name}</div>);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({ hasError: true });
    // sendErrorReport(err, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops, something went wrong!</div>;
    }

    return this.props.children;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'wangshijun' },
    };
  }

  onClick() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick.bind(this)}>Update</button>
      </div>
    );
  }
}

export default App;

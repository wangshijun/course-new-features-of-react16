import React, { Component } from 'react';

const Profile = ({ user }) => (<div>name: {user.name}</div>);

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
        <Profile user={this.state.user} />
        <button onClick={this.onClick.bind(this)}>Update</button>
      </div>
    );
  }
}

export default App;

// Component Lifecycle Methods

import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  // Runs once, right after the component first appears on screen ("is born")
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // Runs right before the component is removed from the screen ("dies")
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <h2>Current time: {this.state.time}</h2>;
  }
}

export default Clock;
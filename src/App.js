import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class Helloworld extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <RaisedButton label="设置" />
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Helloworld />
      </div>
    );
  }
}
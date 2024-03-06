import React, { Component } from 'react';

class Comp extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      name: 'class',
      age: 10
    };
    // this.change = this.change.bind(this);
  }
  /* componentWillMount() {
    console.log('componentWillMount');
  } */
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // componentWillUpdate
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // componentWillReceiveProps
  change = () => {
    console.log('>>>render ', this);
    this.setState({
      ...this.state,
      age: this.state.age + 1
    });
  };
  render() {
    console.log('render', this);
    return (
      <>
        <h1>{JSON.stringify(this.state)}</h1>
        <button onClick={this.change}>change</button>
      </>
    );
  }
}

export default Comp;

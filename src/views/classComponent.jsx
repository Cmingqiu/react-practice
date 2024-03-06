import React, { Component } from 'react';

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'class'
    };
  }
  /*  componentWillMount() {
    console.log('componentWillMount');
  } */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  change() {
    console.log('>>> ', this);
    this.setState({
      name: 'ccc'
    });
  }
  render() {
    console.log('render', this);
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={e => this.change()}>change</button>
      </>
    );
  }
}

export default Comp;

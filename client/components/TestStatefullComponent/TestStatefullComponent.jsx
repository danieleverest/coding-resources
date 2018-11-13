import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: 'Hello, World' };
  }

  render() {
    const { text } = this.state;

    return <h1>{text}</h1>;
  }
}

export default Test;

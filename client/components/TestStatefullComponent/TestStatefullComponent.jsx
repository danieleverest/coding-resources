import React from 'react';

import './TestStatefullComponet.scss';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: 'Hello, World' };
  }

  render() {
    const { text } = this.state;

    return <h1 className="marginTop">{text}</h1>;
  }
}

export default Test;

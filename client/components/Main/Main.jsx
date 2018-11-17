import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class Main extends Component {
  state {
    
  }
  render() {
    const mainTitle = "Welcome to the Programming Reference Site";

    return (
      <div className='"Main'>
      <Main mainTitle={mainTitle} />
      </div>
    )
  }
}


export default Main;

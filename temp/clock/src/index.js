import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock'

class App extends React.Component {
  state = {time: null }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })}, 1000)
  }

  render() {
    return (
        <Clock time={this.state.time}/>
    )
  };
};


ReactDOM.render( <App />, document.querySelector('#root') );

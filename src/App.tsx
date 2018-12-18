import * as React from 'react';
import './App.css';
import Gamepad from './components/Gamepad';

class App extends React.Component {

  constructor(props: {}) {
    super(props)
  }

  public render() {
    return (
      <Gamepad />
    );
  }
}

export default App;

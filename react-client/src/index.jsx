import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from '../src/components/login/login.jsx';
import History from '../src/components/history/history.jsx';
import MakePick from '../src/components/makePick/makePick.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
        <LogIn /> 
        <History />
        <MakePick />   
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

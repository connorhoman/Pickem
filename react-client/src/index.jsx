import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LogIn from '../src/components/login/login.jsx';
import History from '../src/components/history/history.jsx';
import MakePick from '../src/components/makePick/makePick.jsx';

const Title = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-top: 25px;
`;
const Header = styled.div`
  text-align: center;
  background: #bec4c0;
  border: 4px solid black;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 104px;
  width: 87.5%;
  margin-top: 8px;
  margin-right: 8px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentDidMoun() {
    // GET Request to NFL API 
  }

  logInUser(user) {
    this.setState({user: user});
  }

  render () {
    return (
      <div>
        <LogIn logInUser={this.logInUser.bind(this)}/>
        <Header>
          <Title>Fantasy StudMuffins Weekly Pick'em</Title>
        </Header>
        <MakePick user={this.state.user}/>  
        <History />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

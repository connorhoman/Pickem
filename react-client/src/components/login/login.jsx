import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 131px;
  height: 74px;
  border: 4px solid black;
`;
const Form = styled.form`
  margin: 0px;
  width: 131px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
`;
const Button = styled.button`
  font-family: 'Courier New', Courier, monospace;
  margin-left: 43px;
  margin-top: 1px;
  margin-bottom: 1px;
  font-size: 26px;
`;
const LoggedIn = styled.div`
  font-size: 13px;
  text-align: center;
  margin-top: 30px;
  font-family: 'Courier New', Courier, monospace;
`;

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        pin: '',
        loggedIn: false,
        background: '#bec4c0',
      }
    }

    login() {
      this.setState({loggedIn: true, background: '#37c765'});
      console.log('Logged In');
    }

    failedLogin() {
      window.alert('Incorrect Username or PIN');
    }

    checkCredentials() {
      const credentials = {
        manasseh: '1214',
        emyr: '1093',
        fabian: '1592',
        carl: '6821',
        jordan: '8261',
        marcus: '1209',
        james: '8712',
        trevor: '8123',
        joseph: '9018',
        connor: '4030',
      }
      if (credentials[this.state.name] === this.state.pin) {
        this.login();
      } else {
        this.failedLogin();
      }
    }
  
    render () {
      if (this.state.loggedIn) {
        return (
          <Wrapper style={{background: this.state.background}}>
            <LoggedIn>{this.state.name} logged in</LoggedIn>
          </Wrapper>         
        )
      } else {
        return (
          <Wrapper style={{background: this.state.background}}>
            <Form>
              <div>
                <input onChange={(e) => this.setState({name: e.target.value})} fontFamily='Courier New' placeholder='Name'></input>
              </div>
              <div>
                <input onChange={(e) => this.setState({pin: e.target.value})} fontFamily='Courier New' placeholder='PIN'></input>
              </div>   
            </Form>
            <Button onClick={() => this.checkCredentials()}>GO</Button>
          </Wrapper>
        );
      }
    }
}

export default LogIn;

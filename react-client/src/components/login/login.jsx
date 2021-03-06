import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 10%;
  height: 104px;
  border: 4px solid white;
`;
const Form = styled.form`
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
`;
const Button = styled.button`
  font-family: 'Courier New', Courier, monospace;
  margin-left: 43px;
  margin-top: 3px;
  margin-bottom: 1px;
  font-size: 26px;
`;
const LoggedIn = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 13px;
  text-align: center;
  margin-top: 41px;
`;
const Inputs = styled.input`
  font-family: 'Courier New', Courier, monospace;
  width: 94%;
  height: 25px;
  font-size: 20px;
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
      this.props.logInUser(this.state.name);
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
    keyPress(e){
      if(e.keyCode == 13){
        this.checkCredentials();
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
                <Inputs onChange={(e) => this.setState({name: e.target.value})} placeholder='Name'></Inputs>
                <Inputs onKeyDown= {(e) => this.keyPress(e)} onChange={(e) => this.setState({pin: e.target.value})} placeholder='PIN'></Inputs>
              </Form>
              <Button onClick={() => this.checkCredentials()}>GO</Button>
            </Wrapper>         
        );
      }
    }
}

export default LogIn;

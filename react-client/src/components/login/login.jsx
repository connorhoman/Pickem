import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  border: 4px solid black;
  margin: 0px;
  width: 131px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
`;
const Button = styled.button`
  font-family: 'Courier New', Courier, monospace;
  margin-left: 45px;
  font-size: 26px;
`;

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        pin: '',
      }
    }

    login() {
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
      return (
        <div>
          <Form>
            <div>
              <input onChange={(e) => this.setState({name: e.target.value})} fontFamily='Courier' placeholder='Name'></input>
            </div>
            <div>
              <input onChange={(e) => this.setState({pin: e.target.value})} fontFamily='Courier' placeholder='PIN'></input>
            </div>   
          </Form>
          <Button onClick={() => this.checkCredentials()}>GO</Button>
        </div>
      );
    }
}

export default LogIn;

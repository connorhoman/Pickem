import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  border: 4px solid black;
  margin: 0px;
  width: 131px;
  font-family: 'Courier New', Courier, monospace;
`;
const Title = styled.div`
  font-weight: 900;
  font-family: 'Courier New', Courier, monospace;
  padding-left: 45px;
`;

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
    }
  
    render () {
      return (
        <div>
          <Title>LogIn</Title>
          <Form>
            <div>
              <input font-family='Courier' placeholder='Name'></input>
            </div>
            <div>
              <input font-family='Courier' placeholder='PIN'></input>
            </div>   
          </Form>
        </div>
      );
    }
}

export default LogIn;

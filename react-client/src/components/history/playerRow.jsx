import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px ridge black;
  height: 56.6px;
`;
const Position = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  left: 30px;
`;
const Name = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: 600;
  margin-left: 80px;
`;
const Pound = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  left: 10px;
`;

class PlayerRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
    }
  
    render () {
      console.log(this)
      return (
        <Box>
          <div>
            <Pound>#</Pound>
            <Position>
              {this.props.standing}
            </Position>
            <Name>
              {this.props.data}
            </Name>
          </div>
        </Box>   
      );
    }
}

export default PlayerRow;

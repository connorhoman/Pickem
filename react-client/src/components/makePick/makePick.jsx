import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 74%;
  width: 9.8%;
  border: 4px solid black;
  position: absolute;
  top: 127px;
`;

class MakePick extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
    }
  
    render () {
      return (
        <Box>
          MakePick
        </Box>
      );
    }
}

export default MakePick;

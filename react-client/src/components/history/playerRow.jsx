import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px ridge black;
  height: 56.6px;
`;

class PlayerRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
    }
  
    render () {
      return (
        <Box>{this.props.props}</Box>   
      );
    }
}

export default PlayerRow;

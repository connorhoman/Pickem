import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: #37c765;
  height: 74%;
  width: 9.8%;
  border: 4px solid white;
  position: absolute;
  top: 127px;
`;
const EmptyBox = styled.div`
  background: #bec4c0;
  height: 74%;
  width: 9.8%;
  border: 4px solid white;
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
      if (this.props.user === '') {
        return (
          <EmptyBox />
        )
      }
      return (
        <Box>
        </Box>
      );
    }
}

export default MakePick;

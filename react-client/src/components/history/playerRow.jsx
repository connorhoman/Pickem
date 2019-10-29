import React from 'react';
import styled from 'styled-components';
import Pick from '../makePick/pick.jsx';

const Box = styled.div`
  border: 1px ridge white;
  height: 56.6px;
  background: #bec4c0;
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
const Picks = styled.span`
`;

class PlayerRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
    }
  
    render () {
      return (
        <Box>
          <div>
            <Pound>#</Pound>
            <Position>
              {this.props.standing}
            </Position>
            <Name>
              {this.props.data.name}
            </Name>
            <Picks>
              {this.props.data.picks.map((pick, i) => <Pick team={pick} week={i + 1} key={i}>{pick}</Pick>)}
            </Picks>
          </div>
        </Box>   
      );
    }
}

export default PlayerRow;

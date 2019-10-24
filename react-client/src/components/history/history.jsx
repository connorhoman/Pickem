import React from 'react';
import styled from 'styled-components';
import PlayerRow from '../history/playerRow.jsx';

const Box = styled.div`
  right: 8px;
  top: 127px;
  width: 87.7%;
  border: 3px solid black;
  position: absolute;
`;

class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        standings: ['connor', 'emyr', 'manasseh', 'fabian', 'carl', 'trevor', 'james', 'jordan', 'joseph', 'marcus'],
      }
    }

    // componentDidMount() {
    //   this.setState({standings: this.getStandings()});
    // }

    // getStandings() {
    //   // Return GET Request for array of players in order of most points to least points
    // }
  
    render () {
      return (
        <Box>
          {this.state.standings.map(playerRow => <PlayerRow props={playerRow} key={playerRow}>{playerRow}</PlayerRow>)}
        </Box>
      );
    }
}

export default History;

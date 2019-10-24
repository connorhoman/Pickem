import React from 'react';
import styled from 'styled-components';
import PlayerRow from '../history/playerRow.jsx';

const Box = styled.div`
  float: right;
`;

class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        standings: [],
      }
    }

    componentDidMount() {
      this.setState({standings: this.getStandings()});
    }

    getStandings() {
      // Return GET Request for array of players in order of most points to least points
    }
  
    render () {
      return (
        <Box>
          History
        </Box>
        // Render array of PlayerRows from standings in state   
      );
    }
}

export default History;

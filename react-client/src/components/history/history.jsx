import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import PlayerRow from '../history/playerRow.jsx';

const Box = styled.div`
  right: 7px;
  top: 127px;
  width: 87.7%;
  border: 3px solid white;
  position: absolute;
  background: #bec4c0;
`;

class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        standings: [],
      }
    }

    componentDidMount() {
      $.ajax({
        url: '/players', 
        success: (data) => {
          this.setState({standings: data});
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  
    render () {
      return (
        <Box>
          {this.state.standings.map((playerRow, i) => <PlayerRow data={playerRow} key={i} standing={(i + 1)}>{playerRow}</PlayerRow>)}
        </Box>
      );
    }
}

export default History;

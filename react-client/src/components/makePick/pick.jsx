import React from 'react';
import styled from 'styled-components';

const Team = styled.span`
    padding-left: 15px;
    padding-right: 15px;
`;

class Pick extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
    render () {
        console.log(this.props.week)
      return (
        <Team>{this.props.team}</Team>
      );
    }
}

export default Pick;

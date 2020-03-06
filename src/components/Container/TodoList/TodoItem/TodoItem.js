import React, {Component} from 'react';
import styled from 'styled-components'

class TodoItem extends Component {
  render() {
    return (
      <Wrapper>
        TodoItem
      </Wrapper>
    );
  }
}

export default TodoItem;

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
`

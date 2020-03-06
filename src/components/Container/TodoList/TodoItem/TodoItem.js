import React, {Component} from 'react';
import styled from 'styled-components'

class TodoItem extends Component {
  render() {
    const { title } = this.props

    return (
      <Wrapper>
        {title}
        <ButtonPanel>
          <button>Toggle</button>
          <button>Edit</button>
          <button>Delete</button>
        </ButtonPanel>
      </Wrapper>
    );
  }
}

export default TodoItem;

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`

const ButtonPanel = styled.div`
  
`

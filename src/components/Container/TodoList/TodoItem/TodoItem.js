import React, {Component} from 'react';
import styled from 'styled-components'

import {Button} from "../../../UI/Button/Button";

class TodoItem extends Component {
  render() {
    const { title } = this.props

    return (
      <Wrapper>
        {title}
        <ButtonPanel>
          <Button type="info">Toggle</Button>
          <Button type="success">Edit</Button>
          <Button type="danger">Delete</Button>
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

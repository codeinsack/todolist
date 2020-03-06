import React, {Component} from 'react';
import styled from "styled-components";

class RadioButton extends Component {
  render() {
    const { id, textLabel, onChange, checked, groupName } = this.props

    return (
      <Wrapper>
        <label htmlFor={id}>{textLabel}</label>
        <input
          id={id}
          type="radio"
          name={groupName}
          checked={checked}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}

export default RadioButton;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
`

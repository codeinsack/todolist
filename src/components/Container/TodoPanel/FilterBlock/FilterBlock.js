import React, {Component} from 'react';
import styled from "styled-components";

import RadioButton from "../../../UI/RadioButton/RadioButton";

class FilterBlock extends Component {
  render() {
    return (
      <Wrapper>
        <RadioBlock>
          <RadioButton
            id="all"
            textLabel="All"
            groupName="completeness"
            checked
            onChange={() => {}}
          />
          <RadioButton
            id="completed"
            textLabel="Completed"
            groupName="completeness"
          />
          <RadioButton
            id="uncompleted"
            textLabel="Uncompleted"
            groupName="completeness"
          />
        </RadioBlock>
        <SearchBlock>
          <label htmlFor="search">Search</label>
          <input id="search" type="text"/>
        </SearchBlock>
      </Wrapper>
    );
  }
}

export default FilterBlock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioBlock = styled.div`
  display: flex;
`

const SearchBlock = styled.div`
  display: flex;
`

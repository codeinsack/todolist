import React, {Component} from 'react';

import AddItemBlock from "./AddItemBlock/AddItemBlock";
import FilterBlock from "./FilterBlock/FilterBlock";

class TodoPanel extends Component {
  render() {
    return (
      <div>
        <AddItemBlock />
        <FilterBlock />
      </div>
    );
  }
}

export default TodoPanel;

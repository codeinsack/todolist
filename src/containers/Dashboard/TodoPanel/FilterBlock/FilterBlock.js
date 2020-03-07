import React, {Component} from 'react';

class FilterBlock extends Component {
  render() {
    return (
      <div>
        <label htmlFor="all">All</label>
        <input id="all" type="radio" name="completeness"/>
        <label htmlFor="completed">Completed</label>
        <input id="completed" type="radio" name="completeness"/>
        <label htmlFor="uncompleted">Uncompleted</label>
        <input id="uncompleted" type="radio" name="completeness"/>
      </div>
    );
  }
}

export default FilterBlock;

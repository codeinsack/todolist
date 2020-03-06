import React, {Component} from 'react';

class FilterBlock extends Component {
  render() {
    return (
      <div>
        <label>
          All
          <input
            type="radio"
            name="completeness"
            checked
            onChange={() => {}}
          />
        </label>
        <label>
          Completed
          <input
            type="radio"
            name="completeness"
            onChange={() => {}}
          />
        </label>
        <label>
          Incompleted
          <input
            type="radio"
            name="completeness"
            onChange={() => {}}
          />
        </label>
      </div>
    );
  }
}

export default FilterBlock;

import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        Title
        <button>Toggle</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default TodoItem;

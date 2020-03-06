import React, {Component} from 'react';

import TodoItem from "./TodoList/TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;

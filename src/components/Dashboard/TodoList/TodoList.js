import React, {Component} from 'react';

import TodoItem from "./TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem title="Learn React" />
        <TodoItem title="Learn Vue" />
        <TodoItem title="Learn Polymer" />
      </div>
    );
  }
}

export default TodoList;

import React, {Component} from 'react';

import TodoPanel from "./TodoPanel/TodoPanel";
import TodoList from "./TodoList/TodoList";

class Dashboard extends Component {
  render() {
    return (
      <>
        <TodoPanel />
        <TodoList />
      </>
    );
  }
}

export default Dashboard;

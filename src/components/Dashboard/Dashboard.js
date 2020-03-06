import React, {Component} from 'react';

import TodoList from "./TodoList/TodoList";
import TodoPanel from "./TodoPanel/TodoPanel";

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

import React from 'react';

import { Container } from "./components/Container";
import TodoList from "./components/Container/TodoList";
import TodoPanel from "./components/Container/TodoPanel/TodoPanel";

function App() {
  return (
    <Container>
      <TodoPanel />
      <TodoList />
    </Container>
  );
}

export default App;

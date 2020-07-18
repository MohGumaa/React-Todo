import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Take out the trash",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Study",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Take dinner and sleep",
      completed: false,
    },
  ]);

  // Toggle complete
  function markComplete(id) {
    setTodos((prev) => {
      return prev.map((todo, index) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    });
  }

  // Delete Todo
  function delTodo(id) {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
  }

  // Add Todo
  function addTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;

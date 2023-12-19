import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import NewTodoBar from "./components/NewTodoBar/NewTodoBar";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo/Todo";
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import CategoriesBar from "./components/CategoriesBar/CategoriesBar";
import {
  changeCompleteStatusInListWithId,
  deleteFromListWithId,
} from "./utilities";

import data from "./initialData";
import "./App.css";

function App() {
  const initialTodos = data;
  const [sortedTodos, setSortedTodos] = useState(initialTodos);
  const [completedCategory, setCompletedCategory] = useState(null);
  const [theme, setTheme] = useState("light");

  const hasTodos = sortedTodos.length > 0;
  const newId =
    sortedTodos.length > 0 && sortedTodos[sortedTodos.length - 1].id + 1;

  useEffect(() => {
    if (completedCategory && sortedTodos.length <= 0) return;
    setSortedTodos((todos) => {
      return completedCategory !== null
        ? completedCategory === true
          ? todos.filter((todo) => todo.completed)
          : todos.filter((todo) => !todo.completed)
        : todos;
    });
  }, [completedCategory]);

  const handleCompleteTodo = (id) => {
    setSortedTodos((todos) => changeCompleteStatusInListWithId(todos, id));
  };

  const handleAddTodo = (newTodo) => {
    setSortedTodos([...sortedTodos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setSortedTodos((todos) => deleteFromListWithId(todos, id));
  };

  const handleClearCompletedTodos = () => {
    setSortedTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  const handleCategorySelection = (boolean) => {
    setCompletedCategory(boolean);
  };

  const handleThemeToggle = () => {
    // Temporary Fix to see it work in action
    document.querySelector("body").style.backgroundColor = `${
      theme === "light" ? "hsl(235, 21%, 11%)" : "hsl(233, 11%, 84%)"
    }`;
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const handleOnDragEnd = (result) => {
    const items = Array.from(sortedTodos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSortedTodos(items);
  };

  return (
    <div className={`App ${theme}`}>
      <NavBar theme={theme} onThemeToggle={handleThemeToggle} />
      <NewTodoBar newId={newId} onAddTodo={handleAddTodo} />
      {hasTodos && (
        <TodoList onDragEnd={handleOnDragEnd}>
          {sortedTodos.map((todo, ind) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCompleteTodo={handleCompleteTodo}
              onDeleteTodo={handleDeleteTodo}
              index={ind}
            />
          ))}

          <TodoListFooter
            sortedTodos={sortedTodos}
            completedCategory={completedCategory}
            onClearCompletedTodos={handleClearCompletedTodos}
          />
        </TodoList>
      )}
      {hasTodos && (
        <CategoriesBar
          completedCategory={completedCategory}
          onCategorySelection={handleCategorySelection}
        />
      )}
    </div>
  );
}

export default App;

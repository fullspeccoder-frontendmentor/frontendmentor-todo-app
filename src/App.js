import { useState } from "react";

import { ReactComponent as SunIcon } from "./resources/icon-sun.svg";
import { ReactComponent as MoonIcon } from "./resources/icon-moon.svg";
import { ReactComponent as CrossIcon } from "./resources/icon-cross.svg";
import { ReactComponent as CheckIcon } from "./resources/icon-check.svg";
import data from "./initialData";
import "./App.css";
import {
  changeCompleteStatusInListWithId,
  deleteFromListWithId,
} from "./utilities";

function App() {
  const [todos, setTodos] = useState(data);
  const [completedCategory, setCompletedCategory] = useState(null);
  const [isDay, setIsDay] = useState(false);

  const hasTodos = todos.length > 0;
  const newId = todos.length > 0 && todos[todos.length - 1].id + 1;

  const handleCompleteTodo = (id) => {
    setTodos((todos) => changeCompleteStatusInListWithId(todos, id));
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => deleteFromListWithId(todos, id));
  };

  const handleCategorySelection = (boolean) => {
    setCompletedCategory(boolean);
  };

  const handleThemeToggle = () => {
    setIsDay((isDay) => !isDay);
  };

  return (
    <div className="App">
      <NavBar isDay={isDay} onThemeClick={handleThemeToggle} />
      <NewTodoBar newId={newId} onAddTodo={handleAddTodo} />
      {hasTodos && (
        <TodoList
          todos={todos}
          onCompleteTodo={handleCompleteTodo}
          onDeleteTodo={handleDeleteTodo}
          onClearCompletedTodos={() => {
            setTodos((todos) => todos.filter((todo) => !todo.completed));
          }}
          completedCategory={completedCategory}
        />
      )}
      {hasTodos && (
        <CategoriesBar
          todos={todos}
          completedCategory={completedCategory}
          onCategorySelection={handleCategorySelection}
        />
      )}
    </div>
  );
}

const NavBar = ({ isDay, onThemeClick }) => {
  return (
    <>
      <img src="bg-mobile-dark.jpg" alt="cityscape" />
      <div className="NavBar">
        <h1>todo</h1>
        {!isDay && <SunIcon onClick={onThemeClick} />}
        {isDay && <MoonIcon onClick={onThemeClick} />}
      </div>
    </>
  );
};

const NewTodoBar = ({ newId, onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddTodo({ id: newId, title, completed });
      setTitle("");
      setCompleted(false);
    }
  };

  return (
    <div className="NewTodoBar">
      <div>
        <div
          className={`circle${completed ? " checked" : ""}`}
          onClick={() => setCompleted((complete) => !complete)}
        >
          {completed && <CheckIcon />}
        </div>
        <input
          type="text"
          placeholder="Create new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      .
    </div>
  );
};

const TodoList = ({
  todos,
  onCompleteTodo,
  onDeleteTodo,
  onClearCompletedTodos,
  completedCategory,
}) => {
  const sortedTodos =
    completedCategory !== null
      ? completedCategory === true
        ? todos.filter((todo) => todo.completed)
        : todos.filter((todo) => !todo.completed)
      : [...todos];

  return (
    <div className="TodoList">
      {sortedTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}

      <div className="TodoListFooter">
        <span>
          {completedCategory !== true
            ? sortedTodos.length -
              sortedTodos.filter((todo) => todo.completed).length
            : sortedTodos.length}{" "}
          items left
        </span>
        <span onClick={onClearCompletedTodos}>Clear Completed</span>
      </div>
    </div>
  );
};

const Todo = ({ todo, onCompleteTodo, onDeleteTodo }) => {
  const { id, title, completed } = todo;
  return (
    <div className="Todo">
      <div
        className={`circle${completed ? " checked" : ""}`}
        onClick={() => onCompleteTodo(id)}
      >
        {completed && <CheckIcon />}
      </div>
      {!completed && <span>{title}</span>}
      {completed && <strike>{title}</strike>}
      <CrossIcon className="delete-btn" onClick={() => onDeleteTodo(id)} />
    </div>
  );
};

const CategoriesBar = ({ completedCategory, onCategorySelection }) => {
  return (
    <div className="CategoriesBar">
      <span
        className={completedCategory === null && "active"}
        onClick={() => onCategorySelection(null)}
      >
        All
      </span>
      <span
        className={completedCategory === false && "active"}
        onClick={() => onCategorySelection(false)}
      >
        Active
      </span>
      <span
        className={completedCategory === true && "active"}
        onClick={() => onCategorySelection(true)}
      >
        Completed
      </span>
    </div>
  );
};

export default App;

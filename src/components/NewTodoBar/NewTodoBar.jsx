import { useState } from "react";

import { ReactComponent as CheckIcon } from "../../resources/icon-check.svg";

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
    </div>
  );
};

export default NewTodoBar;

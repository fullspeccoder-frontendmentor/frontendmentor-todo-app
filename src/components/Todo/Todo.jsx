import { Draggable } from "react-beautiful-dnd";

import { ReactComponent as CrossIcon } from "../../resources/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../../resources/icon-check.svg";

const Todo = ({ todo, onCompleteTodo, onDeleteTodo, index }) => {
  const { id, title, completed } = todo;
  return (
    <Draggable draggableId={`todo-${todo.id}`} index={index}>
      {(provided) => (
        <div
          className="Todo"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div
            className={`circle${completed ? " checked" : ""}`}
            onClick={() => onCompleteTodo(id)}
          >
            {completed && <CheckIcon />}
          </div>
          {!completed && (
            <span onClick={() => onCompleteTodo(id)}>{title}</span>
          )}
          {completed && (
            <strike onClick={() => onCompleteTodo(id)}>{title}</strike>
          )}
          <CrossIcon className="delete-btn" onClick={() => onDeleteTodo(id)} />
        </div>
      )}
    </Draggable>
  );
};

export default Todo;

import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TodoList = ({ children, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            className="TodoList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {children[0]}
            {provided.placeholder}
            {children[1]}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;

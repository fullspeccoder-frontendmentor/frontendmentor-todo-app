const TodoListFooter = ({
  sortedTodos,
  completedCategory,
  onClearCompletedTodos,
}) => {
  return (
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
  );
};

export default TodoListFooter;

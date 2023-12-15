export const changeCompleteStatusInListWithId = (todos, id) => {
  const newTodos = todos.map((todo) =>
    id === todo.id ? modifyCompletedStatus(todo) : todo
  );

  return newTodos;
};

const modifyCompletedStatus = (todo) => {
  return { ...todo, completed: !todo.completed };
};

export const deleteFromListWithId = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

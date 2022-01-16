export const addTaskAction = (text, key, isDone) => ({
  type: "ADD_TASK",
  text: text,
  key: key,
  isDone: isDone,
});

export const isTaskChecked = (key, isDone) => ({
  type: "IS_TASK_CHECKED",
  key: key,
  isDone: isDone,
});

export const deleteTaskAction = (key) => ({
  type: "DELETE_TASK",
  key: key,
});

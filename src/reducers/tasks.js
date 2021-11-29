const initialState = [
  { text: "Buy milk", key: "1", isDone: true },
  { text: "Buy milk", key: "2", isDone: true },
  { text: "Buy milk", key: "3", isDone: true },
  { text: "Buy milk", key: "4", isDone: true },
];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        {
          text: action.text,
          key: action.key,
          isDone: action.isDone,
        },
        ...state,
      ];
    }
    case "IS_TASK_CHECKED": {
      return state.map((item) => {
        if (item.key == action.key) {
          return { ...item, isDone: action.isDone };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
};
export default tasks;

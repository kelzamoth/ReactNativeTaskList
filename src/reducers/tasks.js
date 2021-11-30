const initialState = [];

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

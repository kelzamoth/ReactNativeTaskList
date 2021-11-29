import { combineReducers } from "redux";
import tasks from "./tasks";
import theme from "./theme";

const rootReducer = combineReducers({
  taskReducer: tasks,
  themeReducer: theme,
});
export default rootReducer;

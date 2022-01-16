import { connect } from "react-redux";
import {
  addTaskAction,
  isTaskChecked,
  changeTheme,
  deleteTaskAction,
} from "../actions";
import Main from "../Main";

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer,
    theme: state.themeReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text, key, isDone) => dispatch(addTaskAction(text, key, isDone)),
    isTaskChecked: (key, isDone) => dispatch(isTaskChecked(key, isDone)),
    changeTheme: (theme) => dispatch(changeTheme(theme)),
    deleteTask: (key) => dispatch(deleteTaskAction(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

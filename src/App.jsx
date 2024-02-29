import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../store/atoms/todo";

const App = () => {
  const todoItem = useRecoilValue(filteredTodoListState(0));
  console.log(todoItem);

  return <div>App</div>;
};

export default App;

import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtomFamily } from "../store/atoms/todo";

const App = () => {
  return (
    <div>
      <GetID id={0} />
      <GetID id={0} />
      <GetID id={0} />
      <GetID id={0} />
      <GetID id={1} />
      <ChangeTodo />
    </div>
  );
};

function ChangeTodo() {
  let setTodo = useSetRecoilState(todoAtomFamily(0));

  setTimeout(() => {
    setTodo({ id: 0, name: "gautam" });
  }, 5000);
}

function GetID({ id }) {
  const todoItem = useRecoilValue(todoAtomFamily(id));
  console.log(todoItem);
  return <div>{todoItem.name}</div>;
}

export default App;

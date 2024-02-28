import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  console.log("buttons re-rendererd");
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

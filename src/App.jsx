import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countState, isEven } from "../store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function IsEven() {
  let checkforEven = useRecoilValue(isEven);
  return <>{checkforEven}</>;
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
  let setCount = useSetRecoilState(countState);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

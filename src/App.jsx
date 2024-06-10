import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={} onClick={()=>{}} /> 만큼을 <button>더할게요</button>{" "}
        <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;

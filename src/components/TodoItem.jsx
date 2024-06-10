import { useSelector } from "react-redux";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem() {
  const todos = useSelector((state) => state.todos);
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>
          제목:{" "}
          {todos.map(function (todo) {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </p>
        <p>
          내용:{" "}
          {todos.map(function (todo) {
            return <div key={todo.id}>{todo.content}</div>;
          })}
        </p>
      </section>
      <section>
        <button>완료</button>
        <button>삭제</button>
      </section>
    </li>
  );
}

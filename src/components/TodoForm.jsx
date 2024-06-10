import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return (
    <form>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: new Date().getTime(),
              title: title,
              content: content,
            })
          );
        }}
      >
        추가
      </button>
    </form>
  );
}

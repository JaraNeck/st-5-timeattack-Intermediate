// TODO: todoSlice 를 작성하세요.
const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const initialState = [{}];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default todos;

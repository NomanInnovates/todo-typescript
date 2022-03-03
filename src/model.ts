export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// import { useReducer } from "react";

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };
// const TodoReducer = (state: Todo[], action:Actions) => {
//   const
//   switch
// };
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return <div />;
// };

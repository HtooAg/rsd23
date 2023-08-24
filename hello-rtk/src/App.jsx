import { useSelector, useDispatch } from "react-redux";
import { add, del } from "./features/todo/todoSlice";
export default function App() {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello RTK</h1>
      <button
        onClick={() => {
          dispatch(add("Milk"));
        }}>
        Add Item
      </button>
      <ul>
        {tasks.map(item => {
          return (
            <li key={item.id}>
              {item.subject}
              <a
                href="#/"
                onClick={() => {
                  dispatch(del(item.id));
                }}>
                del
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

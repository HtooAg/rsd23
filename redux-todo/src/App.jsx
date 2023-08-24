import Header from "./Header";
import { useState, useEffect } from "react";
import MainDrawer from "./MainDrawer";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "./features/todo/todoSlice";

export default function App() {
  const { tasks, loading, error } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Header
        count={tasks.filter(item => !item.done).length}
        toggleDrawer={toggleDrawer}
      />
      {loading && (
        <div style={{ textAlign: "center", marginBottom: 20 }}>Loading</div>
      )}
      {error && (
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            color: "darkred",
          }}>
          Error
        </div>
      )}
      <MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
      <Outlet />
    </>
  );
}

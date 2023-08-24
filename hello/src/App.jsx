import { Link, Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          User
          <ul>
            <li>
              <Link to={"/user/alice"}>Alice</Link>
            </li>
            <li>
              <Link to={"/user/bob"}>Bob</Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

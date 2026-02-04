import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { setAuthToken } from "./api";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Register />
      <hr />
      <Login />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;

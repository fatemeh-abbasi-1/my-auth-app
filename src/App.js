import Register from "./component/Register";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Home from "./component/Home";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
  );
}

export default App;

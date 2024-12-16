import Register from "./component/Register";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Home from "./component/Home";
import ShowMessage from "./component/ShowMessage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes index>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="show-message" element={<ShowMessage />} />
      </Routes>
    </div>
  );
}

export default App;

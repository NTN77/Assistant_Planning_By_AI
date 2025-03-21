import "./App.css";
import Form_User from "./component/Form_PopUp/Form_User";
import ChatApp from "./ChatBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/from_user" element={<Form_User />} />
        <Route path="/home" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;

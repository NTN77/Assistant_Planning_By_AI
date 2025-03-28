import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home/home";
import Form_User from "./component/Form_PopUp/Form_User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form_User />} />
      </Routes>
    </Router>
  );
}

export default App;
